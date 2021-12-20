import { DesignService } from './../../_services/design.service';
import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {
  dataemmit
  dataemmitFrom
  constructor(private service:DesignService) { }

  ngOnInit(): void {
    // of example
    let data = ['Enam','haque','babu']
    const obs = of(...data)
    obs.subscribe(res=>{
      // console.log(res);
      this.dataemmit
      this.service.print(res,'tracker')
    })
    let data1 = {'Name':'Enam','Age':23,'Desig':'Angular'}

    const obs2 = of(data1)
    obs.subscribe(res=>{
      console.log(res);
      this.dataemmit
      this.service.print(res,'tracker1')
    })

    // From Example with array
    let arr = ['Enam','haque','babu']
    const obsFrom = from(arr)
    obs.subscribe(res=>{
      // console.log(res,'from with array');

      this.service.print(res,'trackerFrom')
    })
// From example with promise
const promise = new Promise(resolve=>{
      setTimeout(() => {
        resolve('Promise Resolved')
      }, 3000);
    })
    const PromiseobsFrom = from(promise)
    PromiseobsFrom.subscribe(res=>{
      console.log(res,'from with Promise');
     this.service.print(res,'trackerFrom1')
    })

    // From example with String
    const fromwithString = from('welcome Enamul')
    fromwithString.subscribe(res=>{
      console.log(res,'from with String');
     this.service.print(res,'trackerFrom0')
    })

  }
}
