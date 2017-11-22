import {
  enableProdMode,
  NgModuleFactory,
  CompilerFactory,
  Type
} from '@angular/core';

import 'zone.js/dist/zone';

import { platformBrowser } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { registerAsCustomElements } from '@angular/elements';

import { HelloComponent, HelloModule } from './hello.component';

interface WithName {
  name: string;
}

registerAsCustomElements([HelloComponent], () =>
  platformBrowserDynamic().bootstrapModule(HelloModule)
);
