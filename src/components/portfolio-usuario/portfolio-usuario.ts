import { Component } from '@angular/core';

/**
 * Generated class for the PortfolioUsuarioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'portfolio-usuario',
  templateUrl: 'portfolio-usuario.html'
})
export class PortfolioUsuarioComponent {

  text: string;

  constructor() {
    console.log('Hello PortfolioUsuarioComponent Component');
    this.text = 'Hello World';
  }

}
