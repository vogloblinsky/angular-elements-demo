import {
  Component,
  NgModule,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'hello-world',
  template: `<h1>
      Hello world ! My name is {{name}} !
  </h1>
  <button (click)="onClick()">Hi !</button>`,
  styles: [`
    button {
      color: #3498db;
    }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class HelloComponent {
  @Input() name;
  @Output() hi = new EventEmitter<string>();

  onClick() {
    this.hi.emit(`Hi, ${this.name} talking.`);
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [HelloComponent],
  entryComponents: [HelloComponent]
})
export class HelloModule {
  ngDoBootstrap() {}
}
