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
var tours_service_1 = require('../services/tours.service');
var TakeTourComponent = (function () {
    function TakeTourComponent(_router, TourService) {
        this._router = _router;
        this.TourService = TourService;
    }
    ;
<<<<<<< HEAD
    TakeTourComponent.prototype.ngOnInit = function () {
        this.getTour();
    };
    TakeTourComponent.prototype.getTour = function () {
        //this.tour = this.TourService.getDemoTour();
        //this.PanelService.getRandomPanel().then(panel => this.panel = panel)
        //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
=======
    TakeTourComponent.prototype.onViewTour = function () {
        this._router.navigate(['/view_tour']);
        // note: this is sandbox version
        // final version should pass a parameter to identify the tour
>>>>>>> mn_dev
    };
    TakeTourComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/explore/taketour.component.html',
            styleUrls: ['app/explore/taketour.component.css'],
            providers: [tours_service_1.TourService],
        }), 
        __metadata('design:paramtypes', [router_1.Router, tours_service_1.TourService])
    ], TakeTourComponent);
    return TakeTourComponent;
}());
exports.TakeTourComponent = TakeTourComponent;
//# sourceMappingURL=taketour.component.js.map