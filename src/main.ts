import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './CustomerApp/CustomerApp.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
