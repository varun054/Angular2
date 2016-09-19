import { Injectable } from '@angular/core';
import { Employee } from '../Model/employee';
import { EmpList } from '../Component/Employee-Component/employee-list';

@Injectable()
export class EmployeeService {
  getEmployees(): Promise<Employee[]> {
    return Promise.resolve(EmpList);
  }
  // See the "Take it slow" appendix
  getEmployeeSlowly(): Promise<Employee[]> {
    return new Promise<Employee[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getEmployees());
  }
}