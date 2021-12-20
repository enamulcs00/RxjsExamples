import { OfFromComponent } from './_components/of-from/of-from.component';
import { RxjsIntervalTimerComponent } from './_components/rxjs-interval-timer/rxjs-interval-timer.component';
import { FromEventComponent } from './_components/from-event/from-event.component';
import { DebounceTimeComponent } from './_components/debounce-time/debounce-time.component';
import { HomeComponent } from './_components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForkjoinZipComponent } from './_components/forkjoin-zip/forkjoin-zip.component';


const routes: Routes = [{
  path:'',component:HomeComponent,children:[
    {
      path:'',component:DebounceTimeComponent
  },
  {path:'forkjoinAndZip',component:ForkjoinZipComponent},
  {path:'from_Event',component:FromEventComponent},
  {path:'interval_time',component:RxjsIntervalTimerComponent},
{path:'Of_from',component:OfFromComponent}
]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
