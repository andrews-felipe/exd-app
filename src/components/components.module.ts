import { NgModule } from '@angular/core';
import { TelaDeRecuperacaoComponent } from './tela-de-recuperacao/tela-de-recuperacao';
import { ServicosUsuarioComponent } from './servicos-usuario/servicos-usuario';
import { ServicosAdministradorComponent } from './servicos-administrador/servicos-administrador';
import { PortfolioUsuarioComponent } from './portfolio-usuario/portfolio-usuario';
import { PortfolioAdministradorComponent } from './portfolio-administrador/portfolio-administrador';
@NgModule({
	declarations: [TelaDeRecuperacaoComponent,
    ServicosUsuarioComponent,
    ServicosAdministradorComponent,
    PortfolioUsuarioComponent,
    PortfolioAdministradorComponent],
	imports: [],
	exports: [TelaDeRecuperacaoComponent,
    ServicosUsuarioComponent,
    ServicosAdministradorComponent,
    PortfolioUsuarioComponent,
    PortfolioAdministradorComponent]
})
export class ComponentsModule {}
