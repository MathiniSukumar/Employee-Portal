import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-employee-portal',
  templateUrl: './employee-portal.component.html',
  styleUrls: ['./employee-portal.component.scss']
})
export class EmployeePortalComponent implements OnInit {

  employee: Employee;
  currentRate :number;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void { 
    this.employeeService.getEmployeeDetails().subscribe(response =>
      {
        console.log("inside response" + response)
        this.employee = response;      
      });      
  }

  getLevel(level: string) {
    if (level === 'beginner') {
     return 2;
     } else {
      return 3;
     }
  }
}
