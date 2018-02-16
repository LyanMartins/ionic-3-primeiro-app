import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(page = 1){
  	return this.http.get("https://api.themoviedb.org/3/movie/popular?page="+page+"&api_key=49e003c76f129d759594d1483a7235ba")
  }
  getMoviesDetails(filme){
    return this.http.get("https://api.themoviedb.org/3/movie/"+filme+"?api_key=49e003c76f129d759594d1483a7235ba")
   
  }
}
