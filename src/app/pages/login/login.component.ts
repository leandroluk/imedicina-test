import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '@core/auth.service';
import { ToasterService } from 'angular2-toaster';
import { IResponseJwt } from '@core/interfaces/response-jwt.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isLoading: boolean;

  form: FormGroup;
  inputLogin: FormControl;
  inputSenha: FormControl;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private toast: ToasterService,
    private router: Router
  ) {

    this.inputLogin = new FormControl('', [Validators.required]);
    this.inputSenha = new FormControl('', [Validators.required]);

    this.form = this.fb.group({
      inputLogin: this.inputLogin,
      inputSenha: this.inputSenha
    });

  }

  submit(data: { inputLogin: string, inputSenha: string }) {
    this.isLoading = true;

    this.auth
      .entrar(data.inputLogin, data.inputSenha)
      .subscribe(
        (res) => {
          this.router.navigate(['articles']);
          this.isLoading = false;
        },
        (err: IResponseJwt) => {
          this.isLoading = false;
          this.toast.pop('error', err.message);
        },
        () => this.isLoading = false
      );
  }

}
