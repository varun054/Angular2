import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../Nav-Component/nav.component';
import { DashboardComponent } from '../Dashboard-Component/dashboard.component';
import { Employee } from '../../Model/employee';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'my-app',
  template: `<nav-block></nav-block>
  <router-outlet></router-outlet>
  `,
  providers: [EmployeeService]
})
export class RootComponent {
 }
