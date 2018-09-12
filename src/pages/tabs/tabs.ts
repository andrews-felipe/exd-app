import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import {CadastroPage} from '../cadastro/cadastro'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab4Root = LoginPage;
  tab5Root = CadastroPage;

  constructor() {

  }
}
