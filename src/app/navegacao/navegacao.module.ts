import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';
import { PaginasModule } from '../paginas/paginas.module';


@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    FooterComponent,
    MenuLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    MenuComponent,
    HomeComponent,
    FooterComponent,
    MenuLoginComponent
  ]
})

export class NavegacaoModule { }
