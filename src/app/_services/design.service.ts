import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  constructor() { }
  print(val,id){
    let el = document.createElement('li');
    el.innerText = "video"+"-"+val
  document.getElementById(id).appendChild(el)
  }
}
