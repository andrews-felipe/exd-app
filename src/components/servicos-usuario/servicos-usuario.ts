import { Component } from '@angular/core';

/**
 * Generated class for the ServicosUsuarioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'servicos-usuario',
  templateUrl: 'servicos-usuario.html'
})
export class ServicosUsuarioComponent {

  text: string;

  constructor() {
    console.log('Hello ServicosUsuarioComponent Component');
    this.text = 'Hello World';
  }

}
