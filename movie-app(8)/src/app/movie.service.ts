import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: any[]=[];
  addMovies(movie: any){
    this.movies.push(movie);
  }
  getMovies(){
    return this.movies;
  }
}
