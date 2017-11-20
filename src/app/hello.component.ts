import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  @Input() name;
  @Output() hi = new EventEmitter<string>();

  onClick() {
      this.hi.emit(`Hi, my name is ${this.name}`);
  }
}
