import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { CustomValidators } from 'ngx-custom-validators';

import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

import { Validacpf } from './../../utils/cpf-validator';
import { FullName } from '../../utils/fullName.validator';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {


  cadastroForm: FormGroup;
  usuario: Usuario;


  constructor(private fb: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    const senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);
    const senhaConfirm = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(senha)]);

    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, FullName]],
      cpf: ['', [Validators.required, Validacpf]],
      celular: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: ['', Validators.required],
      senha: senha,
      confirmaSenha: senhaConfirm,
      aceiteTermo: [false, Validators.required],
      aceiteNewsletter: [''],
    });
  }

  get f() { return this.cadastroForm.controls; }


  adicionarConta() {
    // if (this.cadastroForm.dirty && this.cadastroForm.valid) {
    //   this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);

    // }
  }

}

