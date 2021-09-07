import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDetails } from '../Models/EmployeeDetails';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

getAllEmployee():Observable<any>{
  return this.http.get("./assets/EmployeeTable.json");
}

}
