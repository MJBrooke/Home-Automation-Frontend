import {Component, OnInit} from '@angular/core';
import {ComponentsService} from '../../service/component/components.service';

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

  addComponent($event) {
    this.componentsService.addComponent($event.target.value)
      .subscribe(
        () => {
          this.getConnectedComponents();
        }
      );
  }

  getConnectedComponents() {
    this.componentsService.getSensors()
      .subscribe(
        (data: ComponentModel[]) => {
          console.log(data);
          this.sensors = data;
        }
      );

    this.componentsService.getActuators()
      .subscribe(
        (data: ComponentModel[]) => {
          console.log(data);
          this.actuators = data;
        }
      );
  }
}
