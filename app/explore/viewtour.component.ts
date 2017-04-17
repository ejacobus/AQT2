import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/explore/viewtour.component.html',
    styleUrls: ['app/explore/viewtour.component.css']
})

export class ViewTourComponent{
    constructor ( private _router: Router){};
}