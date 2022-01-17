import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CboService {

  constructor(private _httpMethods:HttpClient) { }

  url = 'https://enamulgfb.firebaseio.com/CboData.json'


  saveProduct(products:any[]){

    return this._httpMethods.put(this.url,products)
  }
  fetchProduct(){
    return this._httpMethods.get(this.url);
  }


  createUser(user){
    return this._httpMethods.post("https://enamulgfb.firebaseio.com/cboInfo.json",user);
  }
  getAllUser(){
  return this._httpMethods.get("https://enamulgfb.firebaseio.com/cboInfo.json");
  }
  deleteUser(user){
    return this._httpMethods.delete("https://enamulgfb.firebaseio.com/cboInfo.json"+user.UserId);
  }
  updateUser(user){
    return this._httpMethods.put("https://enamulgfb.firebaseio.com/cboInfo.json"+user.UserId,user);
  }
  getToday(): string {
     return new Date().toTimeString()
    }

fetchJokes(){
  return this._httpMethods.get('https://api.chucknorris.io/jokes/random')
}
}
