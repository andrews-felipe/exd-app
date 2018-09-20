import { Component } from '@angular/core';

/**
 * Generated class for the ServicosAdministradorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'servicos-administrador',
  templateUrl: 'servicos-administrador.html'
})
export class ServicosAdministradorComponent {

  text: string;

  constructor() {
    console.log('Hello ServicosAdministradorComponent Component');
    this.text = 'Hello World';
  }

}
