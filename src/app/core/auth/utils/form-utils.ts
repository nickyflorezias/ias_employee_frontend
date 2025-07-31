import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";
import { AuthService } from "@auth/services/auth.service";
import { catchError, map, Observable, of } from "rxjs";
export class FormUtils {

    static getTextError(errors: ValidationErrors) {
        for (const key of Object.keys(errors)) {
            switch (key) {
                case 'required':
                    return 'Este campo es requerido';

                case 'minlength':
                    return `Mínimo de ${errors['minlength'].requiredLength} caracteres.`;

                case 'min':
                    return `Valor mínimo de ${errors['min'].min}`;

                case 'email':
                    return `El email debe tener formato de correo electronico - test@test.com`;

                case 'emailTaken':
                    return 'El correo electronico ya está tomado'

                default:
                    return `Error no controlado`;
            }
        }

        return null;
    }

    static getFieldError(form: FormGroup, fieldName: string): string | null {
        if (!form.controls[fieldName]) return null;
        const errors = form.controls[fieldName].errors ?? {};
        return FormUtils.getTextError(errors);
    }

    static isValidField(form: FormGroup, fieldName: string): boolean | null {
        return (
            !!form.controls[fieldName].errors && form.controls[fieldName].touched
        );
    }

    static checkEmailExists(userService: AuthService) {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            const email = control.value;
            if (!email) {
                return of(null); // No validar si el campo está vacío
            }

            return userService.checkEmailExists(email).pipe(
                map((exists) => exists ? { emailTaken: true } : null),
                catchError(() => of(null)) // Si hay error en la petición, no bloquear el formulario
            );
        };
    }


} 