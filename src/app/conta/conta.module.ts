import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContaRoutingModule } from './conta.route';
import { CustomFormsModule } from 'ngx-custom-validators';
import { NgxMaskModule } from 'ngx-mask';

import { ContaAppComponent } from './conta.app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ContaService } from './services/conta.service';

@NgModule({
  declarations: [
    ContaAppComponent,
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    ContaService
  ]
})
export class ContaModule { }
