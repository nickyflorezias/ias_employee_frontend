import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req);
  return next(req)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 400){
          return throwError(() => error.error.message)
        }else if(error.status === 500){
           return throwError(() => error.error.message)
        }

        return throwError(() => "Error desconocido")
      })
    );
};
