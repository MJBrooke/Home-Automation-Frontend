import {Component, Input, OnInit} from '@angular/core';
import {CapabilityService} from '../../../service/capability.service';

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
    this.capabilityService.getCapabilityById(this.flow.sensorCapabilityId, (data: CapabilityModel) => {
        this.sensorCapability = data;
      }
    );

    this.capabilityService.getCapabilityById(this.flow.actuatorCapabilityId, (data: CapabilityModel) => {
        this.actuatorCapability = data;
      }
    );
  }
}
