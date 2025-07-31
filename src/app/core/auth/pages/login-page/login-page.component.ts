import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { User } from '@auth/interfaces/user.interface';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  private fb = inject(FormBuilder)
  authService = inject(AuthService)

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  onSubmitUser(user: any) {
    this.authService.login(user.email, user.password).subscribe((data) => {
      console.log(data);
    })
  }
}
