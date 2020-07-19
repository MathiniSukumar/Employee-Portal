import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


export class Employee {
   name: string;
   phoneNumber: number;
   skills: Skill[];
}

export class Skill {
  name: string;
  description: string;
  level: string;
} 

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    
    name: string;
   
  constructor(private httpClient: HttpClient) { }

  getEmployeeDetails(): any {
    let params = new HttpParams().set('name', this.name);
       return this.httpClient.get<Employee>('/employee', {params});       
         
    }
}
