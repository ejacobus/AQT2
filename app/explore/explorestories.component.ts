import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/explore/explorestories.component.html',
    styleUrls: ['app/explore/explorestories.component.css']
})

export class ExploreStoriesComponent{
    constructor ( private _router: Router){};
}
