import { Component, Input } from '@angular/core';
import { Employee } from '../../Model/employee';
import { EmployeeService } from '../../Services/employee.service';
// import { SearchPipe } from './search-pipe';
// import { SearchBox } from './searchbox';

@Component({
  moduleId: module.id,
  selector: 'home-data',
  templateUrl: 'dashboard.component.html',
  // directives: [SearchBox],
  providers: [EmployeeService]
  
})
export class DashboardComponent {
employees: Employee[];

  constructor(private employeeService: EmployeeService) { }
  @Input() term;
  getEmpList(): void {
    this.employeeService.getEmployees().then(employees => this.employees = employees);
  }

  ngOnInit(): void {
    this.getEmpList();
  }

  onClickRemove(emp){
    var index = this.employees.indexOf(emp);
    this.employees.splice(index, 1);
  }
 }
