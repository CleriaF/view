import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviedbService } from 'src/app/services/moviedb.service';
import { MovieService } from 'src/app/pages/movies/movie.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  genres: Array<any> = [];

  constructor(private http: HttpClient, private config: MoviedbService, private service: MovieService) { }
  
  getGenres(){
    this.http.get<any>(this.config.app.urlBase.concat('genre/movie/list' + this.config.app.apiKey), { observe: 'response' })
      .subscribe(resp => {
        this.genres = resp.body.genres;
      });
  }

  ngOnInit() {
    this.getGenres();
  }

}
