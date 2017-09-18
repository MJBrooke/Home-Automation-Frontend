import {Component, OnInit} from '@angular/core';
import {ComponentsService} from '../../../service/components.service';
import {FlowService} from '../../../service/flow.service';
import {Router} from '@angular/router';

export class FlowForm {
  constructor(public name: string = '',
              public description: string = '',
              public sensorId: string = '',
              public sensorCapabilityId: string = '',
              public sensorValue: string = '',
              public actuatorId: string = '',
              public actuatorCapabilityId: string = '',
              public actuationValue: string = '', ) {
  }
}

@Component({
  selector: 'app-add-flow',
  templateUrl: './add-flow.component.html',
  styleUrls: ['./add-flow.component.css']
})
export class AddFlowComponent implements OnInit {

  sensors: ComponentModel[];
  actuators: ComponentModel[];
  sensorCapabilities: CapabilityModel[] = [];
  actuatorCapabilities: CapabilityModel[] = [];

  model: FlowForm = new FlowForm();

  constructor(private router: Router,
              private componentService: ComponentsService,
              private flowService: FlowService) {
  }

  ngOnInit() {
    this.getSensors();
    this.getActuators();
  }

  getSensors() {
    this.componentService.getSensors((data: ComponentModel[]) => {
      this.sensors = data;
    });
  }

  getActuators() {
    this.componentService.getActuators((data: ComponentModel[]) => {
      this.actuators = data;
    });
  }

  getSensorCapabilities(sensorId: number) {
    this.model.sensorCapabilityId = '';

    if (!sensorId) {
      this.sensorCapabilities = [];
      return;
    }

    this.componentService.getCapabilityByComponentId(sensorId, (data: CapabilityModel[]) => {
      this.sensorCapabilities = data;
    });
  }

  getActuatorCapabilities(actuatorId: number) {
    this.model.actuatorCapabilityId = '';

    if (!actuatorId) {
      this.actuatorCapabilities = [];
      return;
    }

    this.componentService.getCapabilityByComponentId(actuatorId, (data: CapabilityModel[]) => {
      this.actuatorCapabilities = data;
    });
  }

  clearForm() {
    this.model = new FlowForm;
    this.sensorCapabilities = [];
    this.actuatorCapabilities = [];
  }

  onSubmit() {
    this.flowService.postFlow(this.model, () => {
      this.router.navigate(['/home']);
    });
  }
}
