import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './hello.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [HelloComponent],
    entryComponents: [HelloComponent]
})
export class HelloModule {
    constructor(private injector: Injector) {
        console.log('HelloModule cstr');
        const customElement = createCustomElement(HelloComponent, { injector });
        customElements.define('hello-world', customElement);
    }
    ngDoBootstrap() {
        console.log('ngDoBootstrap');
    }
}
