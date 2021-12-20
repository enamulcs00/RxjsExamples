import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkjoinZipComponent } from './forkjoin-zip.component';

describe('ForkjoinZipComponent', () => {
  let component: ForkjoinZipComponent;
  let fixture: ComponentFixture<ForkjoinZipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForkjoinZipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkjoinZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
