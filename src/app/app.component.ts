import { CboService } from 'src/app/cbo.service';

import { Component } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  IsUpdate = false
  Arrobj = [{'Name':'Enam','Age':'23'},{'Name':'sahu','Age':'23'}]
  jokes:any
  constructor(public update:SwUpdate,private service:CboService){
    this.update.available.subscribe(event=>{
      this.IsUpdate = true
      this.update.activateUpdate().then(()=>document.location.reload())
      console.log('update avl',event);

    })
this.xyz()
this.Arrobj = this.Arrobj.map((x:any)=>{ x.dept='Angular'
return x})
console.log('arr',this.Arrobj);


  }
xyz(){
this.service.fetchJokes().subscribe(res=>{
this.jokes = res['value']
})
}
}
