import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FlowServiceService {

  private readonly root = '/flow';

  constructor(private http: HttpClient) { }

  // getFlows(): Observable<ComponentsModel> {
  //   return this.http.get<ComponentsModel>(`${this.root}/`);
  // }

}
