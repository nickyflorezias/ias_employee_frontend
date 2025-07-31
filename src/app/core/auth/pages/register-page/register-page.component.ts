import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { User } from '@auth/interfaces/user.interface';
import { AuthService } from '@auth/services/auth.service';
import { FormUtils } from '@auth/utils/form-utils';

@Component({
  selector: 'app-register-page',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  private fb = inject(FormBuilder)
  authService = inject(AuthService)
  formUtils = FormUtils
  formUtilsInject = new FormUtils()

  registerForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email], [FormUtils.checkEmailExists(this.authService)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  onSubmitUser(user: any) {
    const newUser: User = {
      id: +user.id,
      fullName: user.fullName,
      email: user.email,
      password: user.password
    }

    this.authService.register(newUser).subscribe((data) => {
      console.log(data);
    })
  }
}
