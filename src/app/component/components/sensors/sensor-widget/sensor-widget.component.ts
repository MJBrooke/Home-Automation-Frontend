import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor-widget.component.html',
  styleUrls: ['./sensor-widget.component.css']
})
export class SensorWidgetComponent implements OnInit {

  @Input('sensorModel') sensorModel: ComponentModel;

  constructor() { }

  ngOnInit() {
  }

}
