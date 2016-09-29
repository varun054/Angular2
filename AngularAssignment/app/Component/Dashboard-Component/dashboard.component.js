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
var employee_service_1 = require('../../Services/employee.service');
// import { SearchPipe } from './search-pipe';
// import { SearchBox } from './searchbox';
var DashboardComponent = (function () {
    function DashboardComponent(employeeService) {
        this.employeeService = employeeService;
    }
    DashboardComponent.prototype.getEmpList = function () {
        var _this = this;
        this.employeeService.getEmployees().then(function (employees) { return _this.employees = employees; });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.getEmpList();
    };
    DashboardComponent.prototype.onClickRemove = function (emp) {
        var index = this.employees.indexOf(emp);
        this.employees.splice(index, 1);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DashboardComponent.prototype, "term", void 0);
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home-data',
            templateUrl: 'dashboard.component.html',
            // directives: [SearchBox],
            providers: [employee_service_1.EmployeeService]
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map