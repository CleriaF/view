import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviedbService } from 'src/app/services/moviedb.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from './movie.service';
import { AccessibilityService } from 'src/app/layout/accessibility.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  rows: Array<any> = [];
  movies: Array<any> = [];
  genres: Array<any> = [];

  constructor(private http: HttpClient, private config: MoviedbService, private sanitizer: DomSanitizer, private accessibility: AccessibilityService) { }

  getGenres(){
    this.http.get<any>(this.config.app.urlBase.concat('genre/movie/list' + this.config.app.apiKey), { observe: 'response' })
      .subscribe(resp => {
        this.genres = resp.body.genres;
      });
  }

  getMovies(){
    this.http.get<any>(this.config.app.urlBase.concat('movie/popular' + this.config.app.apiKey), {observe: 'response'})
      .subscribe(resp => {
        this.rows = resp.body.results;
        this.movies = this.rows;
      })
  }

  filterGenre(id: number){
    this.http.get<any>(this.config.app.urlBase.concat('discover/movie' + this.config.app.apiKey + '&with_genres=' + id), {observe: 'response'})
      .subscribe(resp => {
        this.movies = resp.body.results;
      })
  }

  applyFilter(event) {
    const value = event.target.value.toLowerCase();
    const temp = this.rows.filter(row => {
      return row.title.toLowerCase().indexOf(value) !== -1 || !value;
    });
    this.movies = temp;
  }

  ngOnInit() {
    this.getMovies();
    this.getGenres();
  }

}
