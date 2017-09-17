import {Component, Input, OnInit} from '@angular/core';
import {CapabilityService} from '../../../service/capability/capability.service';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css']
})
export class FlowComponent implements OnInit {

  @Input() flow: FlowModel;
  sensorCapability: CapabilityModel;
  actuatorCapability: CapabilityModel;

  constructor(private capabilityService: CapabilityService) {
  }

  ngOnInit() {
    this.capabilityService.getCapabilityById(this.flow.sensorId, (data: CapabilityModel) => {
        this.sensorCapability = data;
      }
    );

    this.capabilityService.getCapabilityById(this.flow.actuatorId, (data: CapabilityModel) => {
        this.actuatorCapability = data;
      }
    );
  }
}
