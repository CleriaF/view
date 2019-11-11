import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  filterGenre(idGenre: number){
    return idGenre;
  }

}
