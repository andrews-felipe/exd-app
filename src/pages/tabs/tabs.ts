import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import {CadastroPage} from '../cadastro/cadastro'
import { TelaDeRecuperacaoComponent } from '../../components/tela-de-recuperacao/tela-de-recuperacao';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = LoginPage;
  tab5Root = CadastroPage;
  tab6Root = TelaDeRecuperacaoComponent;

  constructor() {

  }
}
