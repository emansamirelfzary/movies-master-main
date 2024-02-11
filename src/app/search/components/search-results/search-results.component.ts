import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit{
  searchResults:any=[]

  constructor (private _searchService:SearchService){}

  ngOnInit(): void {
     this._searchService.multiSearch().subscribe({
      next:(response)=>{
        console.log(response)
        this.searchResults = {
          movies: response.results.filter((result: any) => result.media_type === 'movie'),
          shows: response.results.filter((result: any) => result.media_type === 'tv')
        };
        console.log(this.searchResults)
      }
     })
  }


}
