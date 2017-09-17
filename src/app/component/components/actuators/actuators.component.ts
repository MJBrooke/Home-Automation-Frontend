import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-actuators',
  templateUrl: './actuators.component.html',
  styleUrls: ['./actuators.component.css']
})
export class ActuatorsComponent implements OnInit {

  @Input('actuatorsModel') actuatorsModel: ComponentModel[];

  constructor() { }

  ngOnInit() {
  }

}
