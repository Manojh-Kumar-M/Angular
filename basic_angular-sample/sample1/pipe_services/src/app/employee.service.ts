import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employerinterface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string="src/assests/employer.json";
  constructor(private _http:HttpClient) { }
  getEmployees():Observable<IEmployee>{
    return this._http.get<IEmployee>(this._url);
  }
}
