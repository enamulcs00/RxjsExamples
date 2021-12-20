import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CboService } from './cbo.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ForkjoinZipComponent } from './_components/forkjoin-zip/forkjoin-zip.component';
import { HomeComponent } from './_components/home/home.component';
import { DebounceTimeComponent } from './_components/debounce-time/debounce-time.component';
import { FromEventComponent } from './_components/from-event/from-event.component';
import { RxjsIntervalTimerComponent } from './_components/rxjs-interval-timer/rxjs-interval-timer.component';
import { OfFromComponent } from './_components/of-from/of-from.component';

@NgModule({
  declarations: [
    AppComponent,
    ForkjoinZipComponent,
    HomeComponent,
    DebounceTimeComponent,
    FromEventComponent,
    RxjsIntervalTimerComponent,
    OfFromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    FormsModule,

  ],
  providers: [CboService],
  bootstrap: [AppComponent]
})
export class AppModule { }
