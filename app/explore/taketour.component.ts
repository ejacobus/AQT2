import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { TourService } from '../services/tours.service';



@Component({
    templateUrl: 'app/explore/taketour.component.html',
    styleUrls: ['app/explore/taketour.component.css'],
    providers: [TourService],

})

//export class TakeTourComponent implements OnInit{
export class TakeTourComponent{

      tour: String;
      
      constructor ( private _router: Router, private TourService: TourService){};
      
//Conflict with eva
//      ngOnInit(): void {
//          this.getTour();
//      }
//      getTour(): void {
          //this.tour = this.TourService.getDemoTour();
          //this.PanelService.getRandomPanel().then(panel => this.panel = panel)
          //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
//      }
//=======
    onViewTour(): void {
        this._router.navigate(['/view_tour']);
        // note: this is sandbox version
        // final version should pass a parameter to identify the tour
    }

}
