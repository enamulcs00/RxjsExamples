import { DesignService } from './../../_services/design.service';

import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,AfterViewInit{
  ScreenName = ''
  @ViewChild('home')home:ElementRef
  constructor(private desin:DesignService) {
    this.desin.textExchane.subscribe((res:string)=>{
      this.ScreenName = res
      // console.log(document);
     })


   }

  ngOnInit(): void {

  }
ngAfterViewInit(){

const x = interval(2000)
// x.pipe(map(y=>'Enam '+y)).subscribe(res=>{
//   console.log(res);

// })
}
}
