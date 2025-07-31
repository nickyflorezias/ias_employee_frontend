import { Routes } from "@angular/router";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";

export const AuthRoutes: Routes = [
    {
        path: 'register',
        component: RegisterPageComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
]

export default AuthRoutes;