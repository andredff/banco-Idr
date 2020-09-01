import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomValidators } from 'ngx-custom-validators';
import { CellPhone, Age, FormErrors, FullName, ValidaCpf } from '../../utils';

import { Usuario } from '../models/usuario.model';
import { ContaService } from '../services/conta.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {


  cadastroForm: FormGroup;
  usuario: Usuario;


  constructor(private fb: FormBuilder, private contaService: ContaService, private router: Router) {

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
      dataNascimento: ['', [Validators.required]],
      senha: senha,
      confirmaSenha: senhaConfirm,
      aceiteTermo: ['', Validators.required],
      aceiteNewsletter: [true],
    });
  }

  get f() { return this.cadastroForm.controls; }


  adicionarConta() {

    this.router.navigate(['/home']);

    FormErrors.showValidationMsg(this.cadastroForm);

    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);

      this.contaService.registrarUsuario(this.usuario)
      .subscribe(
        sucesso => {
          this.cadastroForm.reset();
          this.router.navigate(['/home']);
        },
        falha => {
          console.log('Ocorreu um erro!');
        }
      );
    }
  }

}

