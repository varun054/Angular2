import { Component } from '@angular/core';
import { Employee } from '../../Model/employee';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  moduleId: module.id,
  selector: 'home-data',
  templateUrl: 'dashboard.component.html',
  providers: [EmployeeService]
})
export class DashboardComponent {
employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  getEmpList(): void {
    this.employeeService.getEmployees().then(employees => this.employees = employees);
  }

  ngOnInit(): void {
    this.getEmpList();
  }
 }
