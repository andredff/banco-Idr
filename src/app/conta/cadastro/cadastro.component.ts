import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { CustomValidators } from 'ngx-custom-validators';

import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

// import { ValidaCpf } from './../../utils/cpf-validator';
// import { FullName } from '../../utils/fullName.validator';
// import { FormErrors } from '../../utils/formErrors.validator';
// import { Age } from '../../utils/age.validator';
import { CellPhone, Age, FormErrors, FullName, ValidaCpf } from '../../utils';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  providers: [DatePipe]
})
export class CadastroComponent implements OnInit {


  cadastroForm: FormGroup;
  usuario: Usuario;


  constructor(private fb: FormBuilder, private router: Router, private datePipe: DatePipe) {

  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    const senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);
    const senhaConfirm = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(senha)]);

    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, FullName]],
      cpf: ['', [Validators.required, ValidaCpf.isValidCpf()]],
      celular: ['', [Validators.required, CellPhone]],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: ['', [Validators.required, Age]],
      senha: senha,
      confirmaSenha: senhaConfirm,
      aceiteTermo: ['', Validators.required],
      aceiteNewsletter: [true],
    });
  }

  get f() { return this.cadastroForm.controls; }


  adicionarConta() {

    let date = this.cadastroForm.controls.dataNascimento.value;
    console.log(this.datePipe.transform(date, 'yyyy-MM-dd'));

    FormErrors.showValidationMsg(this.cadastroForm);
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);

      console.log('cadastro ->', this.usuario)
    }
  }



}

