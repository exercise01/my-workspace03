import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
//import { provideAnimations } from '@angular/platform-browser/animations';
//import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
//import { provideImgixLoader } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), provideAnimationsAsync(),
    //provideAnimations(),
    //provideHttpClient()
    //provideImgixLoader('')<===CDNの画像で必要
  ]
};
