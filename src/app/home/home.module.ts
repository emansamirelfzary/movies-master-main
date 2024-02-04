import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { homeMoviesComponent } from './components/home-movies/home-movies.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainSliderComponent,
    homeMoviesComponent
  
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ]
})
export class HomeModule { }
