import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ComponentsService {

  private root = '/component';

  constructor(private http: HttpClient) {
  }

  addComponent(componentName: string) {
    return this.http.post(`${this.root}/add/${componentName}`, null);
  }

  getConnectedComponents(): Observable<ComponentsModel> {
    return this.http.get<ComponentsModel>(`${this.root}/connectedComponents`);
  }

  getComponentById(id: number): Observable<ComponentModel> {
    return this.http.get<ComponentModel>(`${this.root}/${id}`);
  }
}
