import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';

import { IResponseJwt } from '@core/interfaces';
import { UserService } from '@core/services';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public isLoading?: boolean = false;
  public usuario: { login?: string, senha?: string } = {};

  constructor(
    private userService: UserService,
    private toast: ToasterService,
    private router: Router
  ) { }

  submit() {
    this.isLoading = true;

    this.userService
      .postLogin(this.usuario.login, this.usuario.senha)
      .subscribe(
        (res) => {
          this.router.navigateByUrl('/articles');
          this.isLoading = false;
        },
        (err: IResponseJwt) => {
          this.isLoading = false;
          this.toast.pop('error', err.message);
        },
        () => this.isLoading = false
      );

    this.isLoading = false;

  }

}
