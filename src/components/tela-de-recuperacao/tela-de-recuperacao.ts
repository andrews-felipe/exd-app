import { Component } from '@angular/core';

/**
 * Generated class for the TelaDeRecuperacaoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tela-de-recuperacao',
  templateUrl: 'tela-de-recuperacao.html'
})
export class TelaDeRecuperacaoComponent {

  text: string;

  constructor() {
    console.log('Hello TelaDeRecuperacaoComponent Component');
    this.text = 'Hello World';
  }

}
