import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ComponentsService} from '../../../service/components.service';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css']
})
export class ComponentDetailComponent implements OnInit {

  componentData: ComponentModel;
  capabilityData: CapabilityModel[];
  componentTypeData: ComponentTypeModel;

  constructor(private route: ActivatedRoute, private componentsService: ComponentsService) {
  }

  ngOnInit() {
    this.getComponentData();
  }

  private getComponentData() {
    this.route.params.subscribe(params => {
      this.componentsService.getComponentById(params['id']).subscribe(
        (data: ComponentModel) => {
          console.log(data);
          this.componentData = data;
          this.getComponentCapabilityData();
          this.getComponentTypeData();
        }
      );
    });
  }

  private getComponentCapabilityData() {
    this.componentsService.getCapabilityByComponentId(this.componentData.id).subscribe(
      (data: CapabilityModel[]) => {
        this.capabilityData = data;
      }
    );
  }

  private getComponentTypeData() {
    this.componentsService.getComponentTypeByComponentId(this.componentData.id).subscribe(
      (data: ComponentTypeModel) => {
        this.componentTypeData = data;
      }
    );
  }
}
