import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SensorsService {

  constructor(private http: HttpClient) {
  }

  getSensors() {
    return this.http.get<SensorsModel>('/component/test');
  }
}
