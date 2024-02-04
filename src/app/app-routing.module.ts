import { TvSeriesComponent } from './tv-show/components/tv-series/tv-series.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { moviesComponent } from './movies/components/movies/movies.component';
import { MovieDetailsComponent } from './movies/components/movie-details/movie-details.component';
import { TrendingMoviesComponent } from './movies/components/trending-movies/trending-movies.component';
import { TvSeriesDetailsComponent } from './tv-show/components/tv-series-details/tv-series-details.component';
import { TrendingTvSeriesComponent } from './tv-show/components/trending-tv-series/trending-tv-series.component';
import { PersonComponent } from './people/components/person/person.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'movie/popular', component:moviesComponent},
  {path:'movie/top_rated', component:moviesComponent},
  {path:'movie/trending', component:TrendingMoviesComponent},
  {path:'moviedetails/:id', component:MovieDetailsComponent},
  {path:'tv/popular', component:TvSeriesComponent},
  {path:'tv/top_rated',component:TvSeriesComponent},
  {path:'tvsereisdetails/:id', component:TvSeriesDetailsComponent},
  {path:'tv/trending',component:TrendingTvSeriesComponent},
  {path:'person/:id', component:PersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
