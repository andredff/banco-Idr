import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ContaService } from '../services/conta.service';
import { Conta } from '../models/conta.model';
import { FormErrors } from 'src/app/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  conta: Conta;

  constructor(private fb: FormBuilder, private contaService: ContaService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      agencia: ['', Validators.required],
      conta: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  acessarConta() {
    FormErrors.showValidationMsg(this.loginForm);

    if (this.loginForm.dirty && this.loginForm.valid) {
      this.conta = Object.assign({}, this.conta, this.loginForm.value);

      this.contaService.login(this.conta)
        .subscribe(
          sucesso => {
            this.loginForm.reset();
            this.router.navigate(['/home']);
          },
          falha => {
            console.log('Ocorreu um erro!');
          }
        );
    }
  }

}
