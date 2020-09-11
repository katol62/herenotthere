import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {IAuthRequest} from '../../shared/http-data';
import {Router} from '@angular/router';
import {notificationPath} from "../../shared/misc/constants";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  logForm(){
    console.log(this.loginForm.value);
    const authData: IAuthRequest = {email: this.loginForm.get('email').value, password: this.loginForm.get('password').value};

    this.authService.login(authData)
        .subscribe({
          next: value => {
            this.afterSignIn();
          },
          error: error => {
            console.log(error);
          }
        });
  }

  private afterSignIn(): void {
    this.router.navigate([notificationPath]);
  }

}
