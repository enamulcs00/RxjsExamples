import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsIntervalTimerComponent } from './rxjs-interval-timer.component';

describe('RxjsIntervalTimerComponent', () => {
  let component: RxjsIntervalTimerComponent;
  let fixture: ComponentFixture<RxjsIntervalTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsIntervalTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsIntervalTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
