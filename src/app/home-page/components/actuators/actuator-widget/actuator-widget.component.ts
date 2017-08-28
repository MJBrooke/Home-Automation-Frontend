import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-actuator',
  templateUrl: './actuator-widget.component.html',
  styleUrls: ['./actuator-widget.component.css']
})
export class ActuatorWidgetComponent implements OnInit {

  @Input('actuatorModel') actuatorModel: ComponentModel;

  constructor() { }

  ngOnInit() {
  }

}
