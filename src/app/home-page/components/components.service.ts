import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ComponentsService {

  constructor(private http: HttpClient) {
  }

  addComponent(componentName: string) {
    return this.http.get(`/component/add/${componentName}`);
  }

  getSensors() {
    return this.http.get<SensorsModel>('/component/sensors');
  }
}
