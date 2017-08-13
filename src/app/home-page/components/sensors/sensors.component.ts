import { Component, OnInit } from '@angular/core';
import {SensorsService} from './sensors.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {

  sensorsModel: SensorsModel;

  constructor(private sensorsService: SensorsService) { }

  ngOnInit() {
    this.sensorsService.getSensors()
      .subscribe(
        (data: SensorsModel) => {
          console.log(data);
          this.sensorsModel = data;
        }
      );
  }

}
