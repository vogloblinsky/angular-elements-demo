import 'zone.js/dist/zone';

import '@webcomponents/custom-elements/src/native-shim';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HelloModule } from './hello.module';

platformBrowserDynamic()
    .bootstrapModule(HelloModule)
    .then(ref => {
        console.log('HelloModule boostraped');
    });
