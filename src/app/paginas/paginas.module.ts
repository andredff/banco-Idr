import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PaginasRoutingModule } from './paginas.route';
import { PaginasAppComponent } from './paginas.app.component';

import { InstitucionalComponent } from './institucional/institucional.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { BancoComponent } from './banco/banco.component';
import { CartoesComponent } from './cartoes/cartoes.component';



@NgModule({
  declarations: [
    PaginasAppComponent,
    InstitucionalComponent,
    ProdutosComponent,
    BancoComponent,
    CartoesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PaginasRoutingModule
  ]
})
export class PaginasModule { }
