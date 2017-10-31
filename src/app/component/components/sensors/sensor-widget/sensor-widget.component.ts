import {Component, Input, OnInit} from '@angular/core';
import {ComponentsService} from "../../../../service/components.service";

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor-widget.component.html',
  styleUrls: ['./sensor-widget.component.css']
})
export class SensorWidgetComponent implements OnInit {

  @Input('sensorModel') sensorModel: ComponentModel;

  capabilityModel: CapabilityModel[];

  constructor(private componentsService: ComponentsService) {
  }

  ngOnInit() {
    this.getActuatorCapabilities();
  }

  private getActuatorCapabilities() {
    this.componentsService.getCapabilityByComponentId(this.sensorModel.id, (data: CapabilityModel[]) => {
        this.capabilityModel = data;
      }
    );
  }

}
