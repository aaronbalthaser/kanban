import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'auth-form',
  styleUrls: ['auth-form.component.scss'],
  template: `
    <div class="auth-form">
      <form [formGroup]="form" (ngSubmit)="submit()">
        <ng-content select="h3"></ng-content>
        <label>
          <input type="email" placeholder="Email" formControlName="email">
        </label>
        <label>
          <input type="password" placeholder="Password" formControlName="password">
        </label>
        <div class="error" *ngIf="validateEmail">
          Invalid email format
        </div>
        <div class="error" *ngIf="validatePassword">
          Password is reguired
        </div>
        <ng-content select=".error"></ng-content>
        <div class="auth-form__action">
          <ng-content select="button"></ng-content>
        </div>
        <div class="auth-form__toggle">
          <ng-content select="a"></ng-content>
        </div>
      </form>
    </div>
  `
})

export class AuthFormComponent {

  @Output() submitted = new EventEmitter();

  form = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) {}

  public submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form);
    }
  }

  // Validation:
  get validatePassword() {
    const control = this.form.get('password');
    return control.hasError('required') && control.touched;
  }

  get validateEmail() {
    const control = this.form.get('email');
    return control.hasError('email') && control.touched;
  }
}
