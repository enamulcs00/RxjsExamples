import { CboService } from './cbo.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  allUsers:any = []
  CboEmployeeForm:FormGroup
  searchText=''
  isEdit= false;
  userObj={
    Name:'',
    password:'',
    email:'',
    mobile:'',
    id:''
  }
  constructor(public _service:CboService,private CboFb:FormBuilder) {
    this.CboEmployeeForm = this.CboFb.group({
      empCode:['',Validators.required],
      empName:['',Validators.required],
      address:['',Validators.required],
      mobile:['',[Validators.required,Validators.maxLength(15),Validators.minLength(7),Validators.pattern('[- +()0-9]+')]],
      dob:['',Validators.required],
      remark:['',Validators.required],
    })
   }

  ngOnInit(){
this.getCurrentUser();
  }
addUser(){
  if(this.CboEmployeeForm.valid){
    this._service.createUser(this.CboEmployeeForm.value).subscribe((res:any)=>{
      this.getCurrentUser();
      this.CboEmployeeForm.reset()
    });
  }else{
    this.CboEmployeeForm.markAllAsTouched()
  }
}
getCurrentUser() {
  this._service.getAllUser().subscribe((response)=>{
    this.allUsers= response;
  })
}
DeleteUser(user){
  this._service.deleteUser(user).subscribe(()=>{
    this.getCurrentUser();
  })
}
EditUser(user){
  this.userObj = user;
  this.isEdit= true
  this.CboEmployeeForm.patchValue(user)
  }
updateUser(){
  if(this.CboEmployeeForm.valid){
    this.isEdit= !this.isEdit
  this._service.updateUser(this.userObj).subscribe((res)=>{
    this.getCurrentUser();

  })
  }else{this.CboEmployeeForm.markAllAsTouched()}
  }
}
