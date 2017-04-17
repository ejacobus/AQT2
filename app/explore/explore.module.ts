import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
// CommonModule is now imported from SharedModule
import { SharedModule } from '../shared/shared.module';
import { ExploreComponent } from './explore.component';
import { ExploreQuiltComponent } from './explorequilt.component';
import { ExploreStoriesComponent } from './explorestories.component';
import { ViewRandomComponent } from './viewrandom.component';
import { TakeTourComponent } from './taketour.component';
import { ViewTourComponent } from './viewtour.component';
import { FindANameComponent } from './findaname.component';
import { FindMoreOptionsComponent } from './findmoreoptions.component';



@NgModule({
    declarations:[
        ExploreComponent,
        ExploreQuiltComponent,
        ExploreStoriesComponent,
        ViewRandomComponent,
        TakeTourComponent,
        ViewTourComponent,
        FindANameComponent,
        FindMoreOptionsComponent,
        // ExploreRandomComponent,
    ],

    imports:[
        FormsModule,
        // CommonModule,
        SharedModule,
        RouterModule.forChild([
            { path: 'explore', component: ExploreComponent },
            { path: 'explore_the_quilt', component: ExploreQuiltComponent },
            { path: 'explore_stories', component: ExploreStoriesComponent },
            { path: 'view_random', component: ViewRandomComponent },
            { path: 'take_a_tour', component: TakeTourComponent },
            { path: 'view_tour', component: ViewTourComponent },
            { path: 'find_a_name', component: FindANameComponent },
            { path: 'find_more_options', component: FindMoreOptionsComponent },
            // { path: 'exploreRandom', component: ExploreRandomComponent }
        ])
    ],
    providers:[]
})

export class ExploreModule {}
