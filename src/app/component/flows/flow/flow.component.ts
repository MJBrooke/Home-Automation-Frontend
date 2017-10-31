import {Component, Input, OnInit} from '@angular/core';
import {CapabilityService} from '../../../service/capability.service';
import {ComponentsService} from '../../../service/components.service';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css']
})
export class FlowComponent implements OnInit {

  @Input() flow: FlowModel;
  sensor: ComponentModel;
  actuator: ComponentModel;
  sensorCapability: CapabilityModel;
  actuatorCapabilityIdIfSensorValMet: CapabilityModel;
  actuatorCapabilityIdIfSensorValNotMet: CapabilityModel;

  constructor(private componentService: ComponentsService, private capabilityService: CapabilityService) {
  }

  ngOnInit() {
    this.componentService.getComponentById(this.flow.sensorId).subscribe(
      (data: ComponentModel) => {
        this.sensor = data;
      }
    );

    this.componentService.getComponentById(this.flow.actuatorId).subscribe(
      (data: ComponentModel) => {
        this.actuator = data;
      }
    );

    this.capabilityService.getCapabilityById(this.flow.sensorCapabilityId, (data: CapabilityModel) => {
        this.sensorCapability = data;
      }
    );

    this.capabilityService.getCapabilityById(this.flow.actuatorCapabilityIdIfSensorValMet, (data: CapabilityModel) => {
        this.actuatorCapabilityIdIfSensorValMet = data;
      }
    );

    this.capabilityService.getCapabilityById(this.flow.actuatorCapabilityIdIfSensorValNotMet, (data: CapabilityModel) => {
        this.actuatorCapabilityIdIfSensorValNotMet = data;
      }
    );
  }
}
