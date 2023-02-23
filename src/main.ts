import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './customer-app/customer-app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
