import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent }  from '../Component/Dashboard-Component/dashboard.component';
import { AboutComponent }  from '../Component/About-Component/about.component';
import { ContactComponent }    from '../Component/Contact-Component/contact.component';
import { EmployeeComponent }    from '../Component/Employee-Component/employee.component';
import { EmpdetailComponent }    from '../Component/Employee-Component/empdetail.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addemp', component: EmployeeComponent },
  { path: 'empdetail/:empid', component: EmpdetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];
export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
