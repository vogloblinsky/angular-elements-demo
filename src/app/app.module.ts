import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HelloComponent } from './hello.component';

export const entryComponents = [HelloComponent];

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ...entryComponents
  ],
  entryComponents
})
export class AppModule {
    ngDoBootstrap() {}
}
