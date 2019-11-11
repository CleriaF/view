import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessibilityService {

  constructor() { }

  contraste = false;

  fonte = 4;
  fontClass = Array('f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8');

  changeContraste() {
    this.contraste = !this.contraste;

    if (this.contraste) {
      document.body.classList.add('contrast');
    } else {
      document.body.classList.remove('contrast'); 
    }
  }

  changeFont(op: string) {
    document.body.classList.remove(this.fontClass[this.fonte]);

    if (op === '+' && this.fonte < 8) {
      this.fonte = this.fonte + 1;
    } else if (op === '-' && this.fonte > 0) {
      this.fonte = this.fonte - 1;
    } else if (op === 'A') {
      this.fonte = 4;
    }

    document.body.classList.add(this.fontClass[this.fonte]);
  }


}
