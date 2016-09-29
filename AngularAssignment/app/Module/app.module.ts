import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { routing,
         appRoutingProviders } from '../Routing/app.routing';
import { RootComponent }   from '../Component/Root-Component/root.component';
import { NavComponent }   from '../Component/Nav-Component/nav.component';
import { DashboardComponent }   from '../Component/Dashboard-Component/dashboard.component';
import { AboutComponent }   from '../Component/About-Component/about.component';
import { ContactComponent }   from '../Component/Contact-Component/contact.component';
import { EmployeeComponent }    from '../Component/Employee-Component/employee.component';
import { EmpdetailComponent }    from '../Component/Employee-Component/empdetail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ RootComponent, NavComponent, DashboardComponent, AboutComponent, ContactComponent, EmployeeComponent, EmpdetailComponent ],
  providers: [
    appRoutingProviders
  ],
  bootstrap:    [ RootComponent ]
})
export class AppModule { }
