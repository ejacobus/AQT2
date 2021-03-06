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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home/home.component');
var start_component_1 = require('./start/start.component');
// import { GlobalNavComponent } from './shared/globalnav.component';
var explore_module_1 = require('./explore/explore.module');
var participate_module_1 = require('./participate/participate.module');
var shared_module_1 = require('./shared/shared.module');
var taketour_component_1 = require('./explore/taketour.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'start', component: start_component_1.StartComponent },
                    // { path: 'favorite', component: FavoriteComponent },
                    // { path: 'stitch', component: StitchComponent },
                    { path: 'tour', component: taketour_component_1.TakeTourComponent },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', redirectTo: 'home', pathMatch: 'full' }
                ]),
                explore_module_1.ExploreModule,
                shared_module_1.SharedModule,
                participate_module_1.ParticipateModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                start_component_1.StartComponent,
            ],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map