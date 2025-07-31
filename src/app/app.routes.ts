import { Routes } from '@angular/router';
import { authGuardGuard } from './core/auth/guard/auth-guard.guard';
import { isAuthenticatedGuard } from '@auth/guard/is-authenticated.guard';

export const routes: Routes = [
    {
        path: 'employee',
        loadChildren: () => import('./features/features.routes'),
        canMatch: [isAuthenticatedGuard]
    },
    {
        path: 'auth',
        loadChildren: () => import('./core/auth/auth.routes'),
        canMatch: [authGuardGuard]
    },
    {
        path: '**',
        redirectTo: 'auth/login'
    }
];
