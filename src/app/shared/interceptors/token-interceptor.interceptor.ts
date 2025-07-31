import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@auth/services/auth.service';

export const tokenInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService)

  const newReq = req.clone({
    headers: req.headers.append('Authorization', authService.token())
  })
  return next(newReq);
};
