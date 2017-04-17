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
var common_1 = require('@angular/common');
var GlobalNav4Component = (function () {
    //global routing is in the app.module
    function GlobalNav4Component(_router, _location) {
        this._router = _router;
        this._location = _location;
    }
    ;
    GlobalNav4Component.prototype.onHome = function () {
        this._router.navigate(['/home']);
    };
    GlobalNav4Component.prototype.onBack = function () {
        this._location.back();
    };
    GlobalNav4Component.prototype.onTour = function () {
        this._router.navigate(['/tour']);
    };
    GlobalNav4Component = __decorate([
        core_1.Component({
            selector: 'globalnav4',
            templateUrl: 'app/shared/globalnav4.component.html',
            styleUrls: ['app/shared/globalnav4.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location])
    ], GlobalNav4Component);
    return GlobalNav4Component;
}());
exports.GlobalNav4Component = GlobalNav4Component;
//# sourceMappingURL=globalnav4.component.js.map