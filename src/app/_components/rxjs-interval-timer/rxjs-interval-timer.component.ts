import { DesignService } from './../../_services/design.service';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs-interval-timer',
  templateUrl: './rxjs-interval-timer.component.html',
  styleUrls: ['./rxjs-interval-timer.component.css']
})
export class RxjsIntervalTimerComponent implements OnInit {
dataemmit:any
Videosubs:Subscription
  constructor(private service:DesignService) { }

  ngOnInit(): void {
    // const braodcast = interval(1000)
    // timer(delay,interval)
    const braodcast = timer(500,1000)
    this.Videosubs = braodcast.subscribe((res:any)=>{
      console.log(res);
      this.dataemmit = 'enam'+" "+res
      this.service.print(res,'tracker')
      if(res>=5){
this.Videosubs.unsubscribe()
      }
  })

  }

}
