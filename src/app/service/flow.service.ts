import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FlowService {

  private readonly root = '/flow';

  constructor(private http: HttpClient) { }

  getFlows(): Observable<FlowModel[]> {
    return this.http.get<FlowModel[]>(`${this.root}/`);
  }
}
