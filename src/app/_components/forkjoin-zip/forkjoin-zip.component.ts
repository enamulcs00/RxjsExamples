import { DesignService } from './../../_services/design.service';
import { map, take } from 'rxjs/operators';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { forkJoin, fromEvent, Observable, zip } from 'rxjs';

@Component({
  selector: 'app-forkjoin-zip',
  templateUrl: './forkjoin-zip.component.html',
  styleUrls: ['./forkjoin-zip.component.css']
})
export class ForkjoinZipComponent implements AfterViewInit{
  Result = false
  @ViewChild('name')name:ElementRef;
  @ViewChild('color')color:ElementRef
nameSourec = ['Mohan','Rohan','Sohan','Mira','Heera']
colorsource = ['red','green','cyan','yellow','blue']
constructor(private design:DesignService){
  this.design.textExchane.next(this.constructor.name)
}
ngAfterViewInit(){
  // For name
 const nameOpt =  fromEvent<any>(this.name.nativeElement,'change').pipe(map(event=>event.target.value,take(4)))
 // .subscribe(res=>{
  //   console.log(res);  it was for example or testing purpuse  We can Un cament for testing also
  // })
// For color
const colorOpt =  fromEvent<any>(this.color.nativeElement,'change').pipe(map(event=>event.target.value,take(3)))
  // .subscribe(res=>{
  //   console.log(res);  it was for example or testing purpuse  We can Un cament for testing also
  // })

  // ZIP Example -01
  zip(nameOpt,colorOpt).subscribe(([name,color])=>{
    console.log(name,color)
    this.CreateBox(name,color,'elContainer')
    this.Result = true
  })

  //For join Example  not working
  forkJoin(nameOpt,colorOpt).subscribe(([name,color])=>{
    console.log(name,color)
    this.CreateBox(name,color,'elContainer2')

  })
}
CreateBox(name,color,containerId){
  let el = document.createElement('div');
  el.innerText = name;
  el.setAttribute('class',color)
  document.getElementById(containerId).appendChild(el)
}
}
