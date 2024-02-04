import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule} from '@angular/router';
import { CastingComponent } from './components/casting/casting.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RemoveNullPersonPipe } from './pipes/remove-null-person.pipe';



@NgModule({
  declarations: [
    NavBarComponent,
    CastingComponent,
    RemoveNullPersonPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule
  ],
  exports:[
    NavBarComponent,
    CastingComponent
  ]
})
export class SharedModule { }
