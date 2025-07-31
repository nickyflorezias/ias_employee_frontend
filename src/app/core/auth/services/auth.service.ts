import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthResponse } from '@auth/interfaces/auth-response.interface';
import { User } from '@auth/interfaces/user.interface';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'

@Injectable({ providedIn: 'root' })
export class AuthService {

    private router = inject(Router)
    private http = inject(HttpClient)

    user = signal<string | null>(localStorage.getItem('userFullName') ?? null);

    hasError = signal(false)
    errorMessage = signal('')
    isLoading = signal(false)
    token = signal(localStorage.getItem('token') ?? '')

    register(user: User) {
        return this.http.post<User>(`${environment.BASE_URL}/users/register`, {
            fullName: user.fullName,
            email: user.email,
            password: user.password
        })
            .pipe(
                tap((_) => this.router.navigateByUrl('/'))
            )
    }

    login(email: string, password: string) {
        this.isLoading.set(true)
        return this.http.post<AuthResponse>(`${environment.BASE_URL}/users/login`, {
            email: email,
            password: password
        })
            .pipe(
                tap((response) => localStorage.setItem('token', response.token)),
                tap((response) => this.token.set(response.token)),
                tap((response) => localStorage.setItem('userFullName', response.user.fullName)),
                tap((response) => this.user.set(response.user.fullName)),
                tap((_) => this.router.navigateByUrl('/employee/listpage')),
                catchError((error) => {
                    this.hasError.set(true)
                    this.errorMessage.set(error)

                    setTimeout(() => {
                        this.hasError.set(false)
                    }, 3000);

                    this.isLoading.set(false)

                    return of()
                })
            )
    }

    logout() {
        localStorage.clear()
        this.user.set(null)
        this.router.navigateByUrl('/')
    }

    checkEmailExists(email: string): Observable<boolean> {
        return this.http.get<boolean>(`${environment.BASE_URL}/users/check-email?email=${email}`);
    }

}