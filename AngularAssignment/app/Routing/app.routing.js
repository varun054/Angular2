"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('../Component/Dashboard-Component/dashboard.component');
var about_component_1 = require('../Component/About-Component/about.component');
var contact_component_1 = require('../Component/Contact-Component/contact.component');
var employee_component_1 = require('../Component/Employee-Component/employee.component');
var appRoutes = [
    { path: '', component: dashboard_component_1.DashboardComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'addemp', component: employee_component_1.EmployeeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map