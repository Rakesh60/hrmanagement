import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  url = 'http://localhost:4500/api/emp/'
  constructor(private http: HttpClient) {
   }
  createUser(formData: any): Observable<any> {
    return this.http.post(`${this.url}signup`, formData);

  }
  getallemployees():Observable<any>{
    return this.http.get(`${this.url}getallemployees`)
  }
}
