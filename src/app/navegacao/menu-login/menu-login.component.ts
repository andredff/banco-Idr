import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { LocalStorageUtils } from 'src/app/utils/localstorage';

@Component({
  selector: 'app-menu-login',
  templateUrl: './menu-login.component.html',
  styleUrls: ['./menu-login.component.scss']
})
export class MenuLoginComponent {


  constructor(private router: Router) { }

  usuarioLogado() {

  }

  logout() {
    this.router.navigate(['/home']);
  }
}
