import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { MoviesModule } from './movies/movies.module';
import { ScrollService } from './shared/services/scroll.service';
import { TvShowModule } from './tv-show/tv-show.module';
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { PeopleModule } from './people/people.module';
import { SearchModule } from './search/search.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    MoviesModule,
    TvShowModule,
    BrowserAnimationsModule,
    PeopleModule,
    SearchModule,

  ],
  providers: [ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
