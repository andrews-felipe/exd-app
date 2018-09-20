import { Component } from '@angular/core';

/**
 * Generated class for the PortfolioAdministradorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'portfolio-administrador',
  templateUrl: 'portfolio-administrador.html'
})
export class PortfolioAdministradorComponent {

  text: string;

  constructor() {
    console.log('Hello PortfolioAdministradorComponent Component');
    this.text = 'Hello World';
  }

}
