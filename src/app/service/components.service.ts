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

  getSensors(callback: (data) => void) {
    this.http.get<ComponentModel[]>(`${this.root}/sensor`).subscribe(
      (data: ComponentModel[]) => {
        callback(data);
      }
    );
  }

  getActuators(callback: (data) => void) {
    this.http.get<ComponentModel[]>(`${this.root}/actuator`).subscribe(
      (data: ComponentModel[]) => {
        callback(data);
      }
    );
  }

  getComponentById(id: number): Observable<ComponentModel> {
    return this.http.get<ComponentModel>(`${this.root}/${id}`);
  }

  getCapabilityByComponentId(id: number, callback: (data) => void) {
    this.http.get<CapabilityModel[]>(`${this.root}/${id}/capability`).subscribe(
      (data: CapabilityModel[]) => {
        callback(data);
      }
    );
  }

  getComponentTypeByComponentId(id: number): Observable<ComponentTypeModel> {
    return this.http.get<ComponentTypeModel>(`${this.root}/${id}/componentType`);
  }
}
