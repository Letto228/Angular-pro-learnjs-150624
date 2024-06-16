import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HelloComponent {
  @Input() name: string | undefined;
  @Output() say = new EventEmitter<string>();

  onClick() {
    this.say.emit(`Hello: ${this.name}`);
  }
}
