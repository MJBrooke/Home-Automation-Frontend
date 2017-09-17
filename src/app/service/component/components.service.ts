import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ComponentsService {

  private readonly root = '/component';

  constructor(private http: HttpClient) {
  }

  addComponent(componentName: string) {
    return this.http.post(`${this.root}/add/${componentName}`, null);
  }

  getSensors(): Observable<ComponentModel[]> {
    return this.http.get<ComponentModel[]>(`${this.root}/sensor`);
  }

  getActuators(): Observable<ComponentModel[]> {
    return this.http.get<ComponentModel[]>(`${this.root}/actuator`);
  }

  getComponentById(id: number): Observable<ComponentModel> {
    return this.http.get<ComponentModel>(`${this.root}/${id}`);
  }

  getCapabilityByComponentId(id: number): Observable<CapabilityModel[]> {
    return this.http.get<CapabilityModel[]>(`${this.root}/${id}/capability`);
  }

  getComponentTypeByComponentId(id: number): Observable<ComponentTypeModel> {
    return this.http.get<ComponentTypeModel>(`${this.root}/${id}/componentType`);
  }
}
