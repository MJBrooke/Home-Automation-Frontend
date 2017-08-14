import {Component, OnInit} from '@angular/core';
import {ComponentsService} from './components.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  sensorsModel: SensorsModel;

  constructor(private componentsService: ComponentsService) {
  }

  ngOnInit() {
    this.getSensors();
  }

  addComponent($event) {
    this.componentsService.addComponent($event.target.value)
      .subscribe(
        data => {
          this.getSensors();
        }
      );
  }

  getSensors() {
    this.componentsService.getSensors()
      .subscribe(
        (data: SensorsModel) => {
          console.log(data);
          this.sensorsModel = data;
        }
      );
  }
}
