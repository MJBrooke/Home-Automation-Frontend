import {Component, OnInit} from '@angular/core';
import {ComponentsService} from '../../service/components.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  sensors: ComponentModel[];
  actuators: ComponentModel[];

  constructor(private componentsService: ComponentsService) {
  }

  ngOnInit() {
    this.getConnectedComponents();
  }

  getConnectedComponents() {
    this.componentsService.getSensors((data: ComponentModel[]) => {
      this.sensors = data;
    });

    this.componentsService.getActuators((data: ComponentModel[]) => {
      this.actuators = data;
    });
  }
}
