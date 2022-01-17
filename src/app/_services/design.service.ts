import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignService {
textExchane = new Subject<any>()
  constructor() { }

  print(val,id){
    let el = document.createElement('li');
    el.innerText = "video"+"-"+val
  document.getElementById(id).appendChild(el)
  }
}
