import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '@app/core';
import { ToasterService } from 'angular2-toaster';
import { IResponseJwt, IUserJwt } from '@app/core/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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

    this.inputLogin = new FormControl('asd', [Validators.required]);
    this.inputSenha = new FormControl('asd', [Validators.required]);

    this.form = this.fb.group({
      inputLogin: this.inputLogin,
      inputSenha: this.inputSenha
    });

  }

  ngOnInit() {
  }

  submit(data: { inputLogin: string, inputSenha: string }) {
    this.isLoading = true;

    this.auth
      .auth(data.inputLogin, data.inputSenha)
      .subscribe(
        (res: IUserJwt) => this.router.navigate(['articles']),
        (err: IResponseJwt) => this.toast.pop('error', err.message),
        () => { this.isLoading = false; }
      );
  }

}
