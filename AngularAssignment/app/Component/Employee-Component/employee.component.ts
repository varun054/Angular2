import { Component } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../../Services/employee.service';
import { Employee } from '../../Model/employee';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'add-emp',
  templateUrl: 'employee.component.html'

})
export class EmployeeComponent {
	constructor(
    private employeeService: EmployeeService,private router: Router) { }
  employee = new Employee();
  


  addEmployee(employee: Employee){
   console.log(this.employee);
   this.employeeService.add(this.employee);
   this.router.navigateByUrl('/');
  }

  
 }
