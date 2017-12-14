import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'login',
  template: `
    <div>
      <auth-form (submitted)="login($event)">
        <h1>Login</h1>
        <a routerLink="/auth/register">Not Registered?</a>
        <button type="submit">
          Login
        </button>
        <div class="error" *ngIf="error">
          {{ error }}
        </div>
      </auth-form>
    </div>
  `
})

export class LoginComponent {
  public error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async login(event: FormGroup) {
    const { email, password } = event.value;

    try {
      await this.authService.loginUser(email, password);
      this.router.navigate(['dashboard']);
    } catch (error) {
      this.error = error.message;
    }
  }
}
