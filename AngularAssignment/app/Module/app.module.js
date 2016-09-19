"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_routing_1 = require('../Routing/app.routing');
var root_component_1 = require('../Component/Root-Component/root.component');
var nav_component_1 = require('../Component/Nav-Component/nav.component');
var dashboard_component_1 = require('../Component/Dashboard-Component/dashboard.component');
var about_component_1 = require('../Component/About-Component/about.component');
var contact_component_1 = require('../Component/Contact-Component/contact.component');
var employee_component_1 = require('../Component/Employee-Component/employee.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routing],
            declarations: [root_component_1.RootComponent, nav_component_1.NavComponent, dashboard_component_1.DashboardComponent, about_component_1.AboutComponent, contact_component_1.ContactComponent, employee_component_1.EmployeeComponent],
            providers: [
                app_routing_1.appRoutingProviders
            ],
            bootstrap: [root_component_1.RootComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map