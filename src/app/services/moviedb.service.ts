import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  public app: any;
  urlBase: 'https://api.themoviedb.org/3/';
  apikey: '?api_key=f5e2c01d724ac25c41b53ec13de4bc3c&language=pt-BR';

  constructor() { 
    this.app = {
      apiKey: '?api_key=f5e2c01d724ac25c41b53ec13de4bc3c&language=pt-BR',
      urlBase: 'https://api.themoviedb.org/3/'
    };
  }
}
