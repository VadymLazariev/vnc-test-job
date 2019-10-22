import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsLongPollingComponent } from './rxjs-long-polling.component';

describe('RxjsLongPollingComponent', () => {
  let component: RxjsLongPollingComponent;
  let fixture: ComponentFixture<RxjsLongPollingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsLongPollingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsLongPollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
