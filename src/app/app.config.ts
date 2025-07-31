import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import localeEs from '@angular/common/locales/es-CO'

import { routes } from './app.routes';
import { LocaleService } from './shared/services/local.service';
import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { errorInterceptorInterceptor } from '@shared/interceptors/error-interceptor.interceptor';
import { tokenInterceptorInterceptor } from '@shared/interceptors/token-interceptor.interceptor';

registerLocaleData(localeEs, 'es')

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideHttpClient(
      withFetch(),
      withInterceptors([
        errorInterceptorInterceptor,
        tokenInterceptorInterceptor
      ])
    ),
    provideRouter(
      routes, 
      withViewTransitions()),
    {
      provide: LOCALE_ID,
      deps: [LocaleService],
      useFactory: (localService: LocaleService) => localService.getLocale
    }
  ]
};
