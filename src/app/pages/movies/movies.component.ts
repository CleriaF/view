import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviedbService } from 'src/app/services/moviedb.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Array<any> = [];
  genres: Array<any> = [];

  constructor(private http: HttpClient, private config: MoviedbService, private sanitizer: DomSanitizer) { }

  getMovies(){
    this.http.get<any>(this.config.app.urlBase.concat('movie/popular' + this.config.app.apiKey), {observe: 'response'})
      .subscribe(resp => {
        this.movies = resp.body.results;
        this.movies.forEach(m => {
          m.poster_path =  this.sanitizer.bypassSecurityTrustUrl('http://image.tmdb.org/t/p/w185/' + m.poster_path);
        })
      })
  }

  ngOnInit() {
    this.sanitizer.bypassSecurityTrustResourceUrl
    this.getMovies();
  }

}
