import {Component, OnInit} from '@angular/core';
import {FlowService} from '../../service/flow.service';

@Component({
  selector: 'app-flows',
  templateUrl: './flows.component.html',
  styleUrls: ['./flows.component.css']
})
export class FlowsComponent implements OnInit {

  flows: FlowModel[];

  constructor(private flowService: FlowService) { }

  ngOnInit() {
    this.getFlows();
  }

  getFlows() {
    this.flowService.getFlows().subscribe(
      (data: FlowModel[]) => {
        this.flows = data;
      }
    );
  }

}
