import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CapabilityService {

  private readonly root = '/capability';

  constructor(private http: HttpClient) { }

  getCapabilityById(id: number, callback: (data) => void) {
    this.http.get<CapabilityModel>(`${this.root}/${id}`).subscribe(
      (data: CapabilityModel) => {
        callback(data);
      }
    );
  }
}
