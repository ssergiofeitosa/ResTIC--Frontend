import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { DescriptionComponent } from './components/description/description.component';
import { InputComponent } from './components/input/input.component';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import { InicioComponent } from './roteamento/inicio/inicio.component';
import { CategoriasComponent } from './roteamento/categorias/categorias.component';
import { CardapioComponent } from './roteamento/cardapio/cardapio.component';
import { LocalizacaoComponent } from './roteamento/localizacao/localizacao.component';
import { ContatosComponent } from './roteamento/contatos/contatos.component';
import { BurgerDetailsComponent } from './burger-details/burger-details.component';
import { PedidoComponent } from './roteamento/pedido/pedido.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    CardComponent,
    DescriptionComponent,
    InputComponent,
    InicioComponent,
    CategoriasComponent,
    CardapioComponent,
    LocalizacaoComponent,
    ContatosComponent,
    BurgerDetailsComponent,
    PedidoComponent,
    
   
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
