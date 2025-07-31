import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const isAuthenticatedGuard: CanMatchFn = (route, segments) => {

  const router = inject(Router)
  
  if(localStorage.getItem('token')){
    return true;
  }
  
  router.navigateByUrl('/')
  return false;
};
