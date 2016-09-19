import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  moduleId: module.id,
  selector: 'add-emp',
  templateUrl: 'employee.component.html'

})
export class EmployeeComponent {
	constructor(
    private employeeService: EmployeeService) { }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.employeeService.create(name)
      .then(employee => {
        this.employees.push(employee);
      });
  }
 }
