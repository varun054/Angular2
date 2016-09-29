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
var router_1 = require('@angular/router');
var employee_service_1 = require('../../Services/employee.service');
var EmpdetailComponent = (function () {
    function EmpdetailComponent(route, employeeService) {
        this.route = route;
        this.employeeService = employeeService;
    }
    EmpdetailComponent.prototype.getEmpList = function () {
        var _this = this;
        this.employeeService.getEmployees().then(function (employees) { return _this.employees = employees; });
    };
    EmpdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['empid'];
            _this.employeeService.getEmployee(id)
                .then(function (employee) { return _this.employee = employee; });
        });
    };
    EmpdetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'employee-detail',
            templateUrl: 'empdetail.component.html',
            // directives: [SearchBox],
            providers: [employee_service_1.EmployeeService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, employee_service_1.EmployeeService])
    ], EmpdetailComponent);
    return EmpdetailComponent;
}());
exports.EmpdetailComponent = EmpdetailComponent;
//# sourceMappingURL=empdetail.component.js.map