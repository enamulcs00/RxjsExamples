import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CboService {

  constructor(private _httpMethods:HttpClient) { }


  createUser(user){
    return this._httpMethods.post("http://localhost:3000/Employee",user);
  }
  getAllUser(){
  return this._httpMethods.get("http://localhost:3000/Employee");
  }
  deleteUser(user){
    return this._httpMethods.delete("http://localhost:3000/Employee/"+user.id);
  }
  updateUser(user){
    return this._httpMethods.put("http://localhost:3000/Employee/"+user.id,user);
  }
  getToday(): string {
     return new Date().toISOString().split('T')[0]
    }
}
