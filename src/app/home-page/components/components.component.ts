import {Component, OnInit} from '@angular/core';
import {ComponentsService} from './components-service/components.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  connectedComponents: ComponentsModel;

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
    this.componentsService.getConnectedComponents()
      .subscribe(
        (data: ComponentsModel) => {
          console.log(data);
          this.connectedComponents = data;
        }
      );
  }
}
