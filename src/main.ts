import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { register as registerSwiperElements } from 'swiper/element/bundle';
import { AppComponent } from './app/app.component';

registerSwiperElements();

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
