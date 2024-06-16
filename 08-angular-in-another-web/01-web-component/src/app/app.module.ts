import { Injector, NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './hello/hello.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [BrowserModule]
})
export class AppModule {
  ngDoBootstrap() {}

  private readonly injector = inject(Injector);

  constructor() {
    const helloComponentElement = createCustomElement(HelloComponent, {injector: this.injector});

    customElements.define('hello-component', helloComponentElement)
  }
}
