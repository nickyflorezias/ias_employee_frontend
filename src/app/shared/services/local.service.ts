import { Injectable, signal } from '@angular/core';

export type AvailableLocales = 'es' | 'en'

@Injectable({ providedIn: 'root' })
export class LocaleService {
    private currentLocal = signal<AvailableLocales>('es')

    constructor() {
        this.currentLocal.set(
            localStorage.getItem('locale') as AvailableLocales ?? 'es'
        )
    }

    get getLocale() {
        return this.currentLocal()
    }
}