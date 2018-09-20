import { NgModule } from '@angular/core';
import { TelaDeRecuperacaoComponent } from './tela-de-recuperacao/tela-de-recuperacao';
import { ServicosUsuarioComponent } from './servicos-usuario/servicos-usuario';
import { ServicosAdministradorComponent } from './servicos-administrador/servicos-administrador';
import { CadastroComponent } from './cadastro/cadastro';
import { LoginComponent } from './login/login';


@NgModule({
    declarations: [
        TelaDeRecuperacaoComponent,
        ServicosUsuarioComponent,
        ServicosAdministradorComponent,
        CadastroComponent,
        LoginComponent
    ],
    imports: [],
    exports: [
        TelaDeRecuperacaoComponent,
        ServicosUsuarioComponent,
        ServicosAdministradorComponent,
        CadastroComponent,
        LoginComponent
    ]
})
export class ComponentsModule {}
