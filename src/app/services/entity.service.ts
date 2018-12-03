import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Data Model Imports
import { Customer } from '../customer.model';
import { Employee } from '../employee.model';


@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor(private http: HttpClient) { }

  //Read all data
  getCustomersData(): Observable<any> {
    return this.http.get("http://localhost:8081/api/customer");
  }

  //Create
  addCustomer(custName: string, custEmail: string, custNum: string): Observable<any> {
    const customer: Customer = { custName: custName, custEmail: custEmail, custNum: custNum };
    return this.http.post("http://localhost:8081/api/customer", customer);
  }

  //Delete
  deleteCustomer(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/customer/" + id);
  }

  //Read
  getCustomer(id: String): Observable<any> {
    return this.http.get("http://localhost:8081/api/customer/" + id);
  }

  //Update
  updateCustomer(id: String, custName: string, custEmail: string, custNum: string): Observable<any> {
    const customer: Customer = { custName: custName, custEmail: custEmail, custNum: custNum };
    return this.http.put("http://localhost:8081/api/customer/" + id, customer);
  }

  //Read all data
  getEmployeesData(): Observable<any> {
    return this.http.get("http://localhost:8081/api/employee");
  }

  //Create
  addEmployee(empNum: string, empName: string, empJobTitle: string): Observable<any> {
    const employee: Employee = { empNum: empNum, empName: empName, empJobTitle: empJobTitle };
    return this.http.post("http://localhost:8081/api/employee", employee);
  }

  //Delete
  deleteEmployee(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/employee/" + id);
  }

  //Read
  getEmployee(id: String): Observable<any> {
    return this.http.get("http://localhost:8081/api/employee/" + id);
  }

  //Update
  updateEmployee(id: String, empNum: string, empName: string, empJobTitle: string): Observable<any> {
    const employee: Employee = { empNum: empNum, empName: empName, empJobTitle: empJobTitle };
    return this.http.put("http://localhost:8081/api/employee/" + id, employee);
  }

}
