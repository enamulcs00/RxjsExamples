import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { CboService } from 'src/app/cbo.service';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit {
  postUrl = "https://enamulgfb.firebaseio.com/cboInfo.json";
  dat: any = new Date();
  @ViewChild("TempRef") TempRef: ElementRef;
  allUsers: any = [];
  totalEmployee;
  CboEmployeeForm: FormGroup;
  searchText = "";
  isEdit = false;
  userObj = {
    Name: "",
    password: "",
    email: "",
    mobile: "",
    id: "",
  };
  Technology: any[];
  UserObject: any;
  constructor(
    public _service: CboService,
    private CboFb: FormBuilder,
    private _http: HttpClient
  ) {
    console.log("cons", document.readyState);

    this.CboEmployeeForm = this.CboFb.group({
      empCode: ["", Validators.required],
      empName: ["", Validators.required],
      address: ["", Validators.required],
      mobile: [
        "",
        [
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(7),
          Validators.pattern("[- +()0-9]+"),
        ],
      ],
      dob: ["", Validators.required],
      remark: ["", Validators.required],
    });
  }
  getAge = (birthDate) =>
    Math.floor((this.dat - new Date(birthDate).getTime()) / 3.15576e10);
  ngAfterViewInit() {
    fromEvent<any>(this.TempRef.nativeElement, "keyup")
      .pipe(
        map((event) => event.target.value),
        debounceTime(2000),
        distinctUntilChanged()
      )
      .subscribe((res: any) => {
        console.log(res);
        this.searchText = res;
      });
  }
  ngOnInit() {
    console.log("this", this);

    this.fetchPostedUser();
    console.log(x);
    var x = 6;
  }
  addUser() {
    if (this.CboEmployeeForm.valid) {
      this._service
        .createUser(this.CboEmployeeForm.value)
        .subscribe((res: any) => {
          this.fetchPostedUser();
          this.CboEmployeeForm.reset();
        });
    } else {
      this.CboEmployeeForm.markAllAsTouched();
    }
  }

  DeleteUser(user) {
    if (confirm("Do You want to Delete emp details?")) {
      this._http
        .delete("https://enamulgfb.firebaseio.com/" + user.UserId + ".json")
        .subscribe(() => {
          this.fetchPostedUser();
        });
    }
  }
  EditUser(user) {
    console.log("User", user);

    this.isEdit = true;
    this.UserObject = user;
    this.CboEmployeeForm.patchValue(user);
  }
  UpdateNow() {
    this._http
      .put(
        "https://enamulgfb.firebaseio.com/" + this.UserObject.UserId + ".json",
        this.CboEmployeeForm.value
      )
      .subscribe((result) => {
        console.log(result, "Res of update");
        this.fetchPostedUser();
      });
  }

  updateUser() {
    if (this.CboEmployeeForm.valid) {
      this.isEdit = !this.isEdit;
      this.UpdateNow();
    } else {
      this.CboEmployeeForm.markAllAsTouched();
    }
  }
  fetchPostedUser() {
    this._http
      .get<any>(this.postUrl)
      .pipe(
        map((UserResponse) => {
          const userArray = [];
          for (const key in UserResponse) {
            if (UserResponse.hasOwnProperty(key)) {
              userArray.push({ UserId: key, ...UserResponse[key] });
            }
          }
          return userArray;
        })
      )
      .subscribe((users) => {
        this.allUsers = users;
      });
  }
}
