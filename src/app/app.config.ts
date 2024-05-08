import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

export const appConfig: ApplicationConfig = {

  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideRouter(routes), provideHttpClient()
  ]

};
