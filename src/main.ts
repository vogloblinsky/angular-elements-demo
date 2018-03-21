import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HelloModule } from './hello.module';
import { HelloComponent } from './hello.component';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

let injector: Injector;

platformBrowserDynamic()
    .bootstrapModule(HelloModule)
    .then(ref => {
        console.log('HelloModule boostraped');
        injector = ref.injector;
        const ngElementConstructor = createCustomElement(HelloComponent, {
            injector
        });
        customElements.define('hello-world', ngElementConstructor);
    });
