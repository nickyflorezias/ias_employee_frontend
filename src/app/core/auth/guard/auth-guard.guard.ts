import { inject, Inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const authGuardGuard: CanMatchFn = (route, segments) => {

  const router = inject(Router)
  
  if(localStorage.getItem('token')){
    router.navigateByUrl('/employee')
    return false;
  }
  return true;
};
