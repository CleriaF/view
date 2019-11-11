import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  filterGenre(idGenre: number){
    console.log('chegou')
    return idGenre;
  }

  filterName(name){
    return event;
  }

}
