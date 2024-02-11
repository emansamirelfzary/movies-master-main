import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl:string='https://api.themoviedb.org/3/search/multi'
  apiKey='cdf53c51ba8de3ad35b91437f974f199'

  constructor(private _HttpClient:HttpClient) { }

  multiSearch():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}?api_key=${this.apiKey}&query=breaking`)
  }
}
