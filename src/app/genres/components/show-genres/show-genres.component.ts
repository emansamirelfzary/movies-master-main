import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-show-genres',
  templateUrl: './show-genres.component.html',
  styleUrls: ['./show-genres.component.css']
})
export class ShowGenresComponent implements OnInit{

  genreId:number=0

  constructor(private _activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe({
      next:(response:any)=>{
        this.genreId=response.params.id
        console.log(this.genreId)
      }
    })
      
  }

}
