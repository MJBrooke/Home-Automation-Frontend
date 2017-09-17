import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ActuatorWidgetComponent} from './actuator-widget.component';

describe('ActuatorComponent', () => {
  let component: ActuatorWidgetComponent;
  let fixture: ComponentFixture<ActuatorWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuatorWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuatorWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
