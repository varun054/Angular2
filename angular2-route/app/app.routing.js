"use strict";
var router_1 = require('@angular/router');
var crisis_list_component_1 = require('./crisis-list.component');
var hero_list_component_1 = require('./hero-list.component');
var home_component_1 = require('./home.component');
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'crisis-center', component: crisis_list_component_1.CrisisListComponent },
    { path: 'heroes', component: hero_list_component_1.HeroListComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map