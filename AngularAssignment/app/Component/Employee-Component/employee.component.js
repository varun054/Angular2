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
var employee_1 = require('../../Model/employee');
var router_1 = require('@angular/router');
var EmployeeComponent = (function () {
    function EmployeeComponent(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
        this.employee = new employee_1.Employee();
    }
    EmployeeComponent.prototype.addEmployee = function (employee) {
        console.log(this.employee);
        this.employeeService.add(this.employee);
        this.router.navigateByUrl('/');
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-emp',
            templateUrl: 'employee.component.html'
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.Router])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map