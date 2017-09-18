import {Component, EventEmitter, Output} from '@angular/core';
import {ComponentsService} from '../../../service/components.service';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent {

  @Output() componentAdded = new EventEmitter();

  addComponentLoading: Boolean;
  addComponentError: Boolean;

  constructor(private componentsService: ComponentsService) {
  }

  addComponent($event) {
    this.addComponentLoading = true;
    this.addComponentError = false;

    this.componentsService.addComponent($event.target.value)
      .subscribe(
        () => {
          this.addComponentLoading = false;
          this.componentAdded.emit();
        },
        () => {
          this.addComponentError = true;
          this.addComponentLoading = false;
        }
      );
  }
}
