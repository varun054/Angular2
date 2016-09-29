import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }                 from '@angular/common';
import { Employee } from '../../Model/employee';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  moduleId: module.id,
  selector: 'employee-detail',
  templateUrl: 'empdetail.component.html',
  // directives: [SearchBox],
  providers: [EmployeeService]
  
})
export class EmpdetailComponent implements OnInit {
employees: Employee[];
employee: Employee;
  private sub: any;
  getEmpList(): void {
    this.employeeService.getEmployees().then(employees => this.employees = employees);
  }
  constructor(
    private route: ActivatedRoute,private employeeService: EmployeeService
  ) { }


  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = params['empid'];
      this.employeeService.getEmployee(id)
        .then(employee => this.employee = employee);
    });
  }

 }
