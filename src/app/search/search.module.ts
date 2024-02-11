import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SearchModule { }
