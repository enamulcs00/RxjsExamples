import { DesignService } from './../../_services/design.service';
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements AfterViewInit {
@ViewChild('ButtonRef')ButtonRef:ElementRef
  constructor(private service:DesignService) { }

  ngAfterViewInit(): void {
  let  count = 1;
    fromEvent(this.ButtonRef.nativeElement,'click').subscribe((res)=>{
      console.log('Video',count++);
      this.service.print(count,'UlTracker')
    },(err)=>{console.log(err)},
    ()=>{
      console.log('Complete');

    }

    )
  }


}
