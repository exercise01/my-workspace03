import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
//import { provideAnimations } from '@angular/platform-browser/animations';
//import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
//import { provideImgixLoader } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    //provideAnimations(),
    //provideHttpClient()
    //provideImgixLoader('')<===CDNの画像で必要
  ]
};
