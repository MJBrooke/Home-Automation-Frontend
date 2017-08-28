import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ComponentsService} from '../components-service/components.service';

@Component({
  selector: 'app-component-view',
  templateUrl: './component-view.component.html',
  styleUrls: ['./component-view.component.css']
})
export class ComponentViewComponent implements OnInit {

  sensorData: ComponentModel;

  constructor(private route: ActivatedRoute, private componentsService: ComponentsService) {
  }

  ngOnInit() {
    this.getSensorData();
  }

  private getSensorData() {
    this.route.params.subscribe(params => {
      this.componentsService.getComponentById(params['id']).subscribe(
        (data: ComponentModel) => {
          console.log(data);
          this.sensorData = data;
        }
      );
    });
  }
}
