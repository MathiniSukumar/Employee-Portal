import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  form: FormGroup = new FormGroup({
    userName: new FormControl(''),
    phoneNumber: new FormControl(''),
  });
  
  constructor(private employeeService: EmployeeService, private router: Router) { }

  get formControls() {
    return this.form.controls; 
 }

  submit() {
    this.employeeService.name = this.formControls['userName'].value;
    this.router.navigate(['/employee-portal']);
  }
}
