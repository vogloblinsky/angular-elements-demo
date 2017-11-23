import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { registerAsCustomElements } from '@angular/elements';

import { HelloComponent, HelloModule } from './hello.component';

registerAsCustomElements([HelloComponent], () =>
  platformBrowserDynamic().bootstrapModule(HelloModule)
);
