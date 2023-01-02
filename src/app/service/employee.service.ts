import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_URL } from 'env';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  serverUrl=SERVER_URL;
  constructor(private http:HttpClient) { }
  //To fetch all employees
  getAllEmployees(){
    return this.http.get<Employee[]>(this.serverUrl);
  }
   //To fetch a employees
  getEmployee(){

  }
   //To save  employee
  saveEmployee(payload:any){
    return this.http.post<Employee>(this.serverUrl,payload);
  }
   //To update  employee
  updateEmployee(){

  }
  //To delete  employee
  deleteEmployee(){

  }
}
