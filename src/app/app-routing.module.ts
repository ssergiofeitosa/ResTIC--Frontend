import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { InicioComponent } from './roteamento/inicio/inicio.component';
import { ContatosComponent } from './roteamento/contatos/contatos.component';
import { CardapioComponent } from './roteamento/cardapio/cardapio.component';
import { CategoriasComponent } from './roteamento/categorias/categorias.component';
import { LocalizacaoComponent } from './roteamento/localizacao/localizacao.component';
import { PedidoComponent } from './roteamento/pedido/pedido.component';

const routes: Routes = [
  {path:'', redirectTo:'/inicio', pathMatch:'full'},//redirecionamento para a pagina inicial//
  { path: 'inicio', component: InicioComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'localizacao', component: LocalizacaoComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: 'pedido', component : PedidoComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
