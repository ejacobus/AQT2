import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/participate/participate.component.html',
    styleUrls: ['app/participate/participate.component.css']
})

export class MyParticipationComponent{
    constructor ( private _router: Router){};

    onFavorites(): void {
      //  this._router.navigate(['/my_favorites']);
    }

    onMyAlbums(): void {
        //this._router.navigate(['/my_albums']);
    }

    onAddContent(): void {
        //this._router.navigate(['/add_my_stories']);
    }

}
