import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemesService {

    theme = signal(localStorage.getItem('theme') ?? 'dark')

    changeTheme(theme: string) {
        localStorage.setItem('theme', theme)
        this.theme.set(localStorage.getItem('theme')!)
    }
}