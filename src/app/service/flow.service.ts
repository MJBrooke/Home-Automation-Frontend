import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {FlowForm} from '../component/flows/add-flow/add-flow.component';

@Injectable()
export class FlowService {

  private readonly root = '/flow';

  constructor(private http: HttpClient) { }

  getFlows(): Observable<FlowModel[]> {
    return this.http.get<FlowModel[]>(`${this.root}`);
  }

  postFlow(flowForm: FlowForm, callback: (data) => void) {
    this.http.post(`${this.root}`, flowForm).subscribe(
      data => {
        callback(data);
      }
    );
  }
}
