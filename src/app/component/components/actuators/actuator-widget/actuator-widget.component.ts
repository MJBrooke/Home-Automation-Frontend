import {Component, Input, OnInit} from '@angular/core';
import {ComponentsService} from '../../../../service/components.service';

@Component({
  selector: 'app-actuator',
  templateUrl: './actuator-widget.component.html',
  styleUrls: ['./actuator-widget.component.css']
})
export class ActuatorWidgetComponent implements OnInit {

  @Input('actuatorModel') actuatorModel: ComponentModel;

  capabilityModel: CapabilityModel[];

  constructor(private componentsService: ComponentsService) {
  }

  ngOnInit() {
    this.getActuatorCapabilities();
  }

  private getActuatorCapabilities() {
    this.componentsService.getCapabilityByComponentId(this.actuatorModel.id, (data: CapabilityModel[]) => {
        this.capabilityModel = data;
      }
    );
  }

}
