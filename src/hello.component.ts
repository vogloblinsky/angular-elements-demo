import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation,
    Injector
} from '@angular/core';
import { createCustomElement } from '@angular/elements';

@Component({
    selector: 'hello-world',
    template: `<h1>
      Hello world ! My name is {{name}} !
  </h1>
  <button (click)="onClick()">Hi !</button>`,
    styles: [
        `
    button {
      color: #3498db;
    }
  `
    ],
    encapsulation: ViewEncapsulation.Native
})
export class HelloComponent {
    @Input() name;
    @Output() hi = new EventEmitter<string>();

    onClick() {
        this.hi.emit(`Hi, ${this.name} talking.`);
    }

    constructor() {
        console.log('hello-world cst');

        /*const ngElementConstructor = createCustomElement(HelloComponent, {
            injector
        });
        customElements.define('hello-world', ngElementConstructor);*/
    }
}
