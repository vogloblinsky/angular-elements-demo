import { enableProdMode, NgModuleFactory, CompilerFactory, Type } from '@angular/core';

import { platformBrowser } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { registerAsCustomElements, NgElementWithProps } from '@angular/elements';

import { getModuleFactory, onError } from './bootstrap-helpers';

import { HelloModule, entryComponents } from './app/hello.module';
import { environment } from './environments/environment';

interface WithName {
    name: string;
}

if (environment.production) {
    enableProdMode();
}

//Initial bootstrap
/*platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));*/

//Light bootstrap
/*registerAsCustomElements(
  entryComponents,
  () => platformBrowserDynamic().bootstrapModule(HelloModule)
).catch(err => console.log(err));*/

//Normal bootstrap
const doRegister = true ?
  () => {
    const moduleFactory = getModuleFactory<HelloModule>(HelloModule);
    const platformRef = platformBrowser();
    return registerAsCustomElements(entryComponents, platformRef, moduleFactory);
  } :
  () => {
    const bootstrapFn = () => platformBrowserDynamic().bootstrapModule(HelloModule);
    return registerAsCustomElements(entryComponents, bootstrapFn);
  };

doRegister().then(doStuff).catch(onError);

function doStuff(): void {
    interface EventHi extends Event {
        detail: string;
    }

    const helloCp = document.querySelector('hello-world') as NgElementWithProps<any, WithName>;
    console.log(helloCp);

    helloCp.setAttribute('name', 'Marc');
    helloCp.addEventListener('hi', (data:EventHi) => {
        console.log(data.detail);
    });
}
