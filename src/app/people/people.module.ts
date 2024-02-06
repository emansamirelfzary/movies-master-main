import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './components/person/person.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PersonImgComponent } from './components/person-img/person-img.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    PersonComponent,
    PersonImgComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    CarouselModule
  ]
})
export class PeopleModule { }
