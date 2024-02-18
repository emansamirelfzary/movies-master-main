import { Component, Input, OnInit } from '@angular/core';
import { GenresService } from '../../services/genres.service';

@Component({
  selector: 'app-genre-movies',
  templateUrl: './genre-movies.component.html',
  styleUrls: ['./genre-movies.component.css']
})
export class GenreMoviesComponent implements OnInit{

  @Input() genreId:number=0

  constructor(private _genresService:GenresService){}

  ngOnInit(): void {
    this._genresService.getGenreMovies(this.genreId).subscribe({
      next:(response)=>{
        console.log(response)
      }
    })
  }

}
