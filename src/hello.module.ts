import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './hello.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [HelloComponent],
    entryComponents: [HelloComponent]
})
export class HelloModule {
    constructor() {
        console.log('HelloModule cstr');
    }
    ngDoBootstrap() {
        console.log('ngDoBootstrap');
    }
}
