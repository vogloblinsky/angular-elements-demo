import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

export const entryComponents = [AppComponent, HelloComponent];

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ...entryComponents
  ],
  bootstrap: [AppComponent],
  entryComponents
})
export class AppModule {
    ngDoBootstrap() {}
}
