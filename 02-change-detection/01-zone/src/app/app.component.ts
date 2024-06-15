import { Component, NgZone, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'zone';
  counter = 0;

  // private readonly ngZone = inject(NgZone);

  constructor() {
    // this.ngZone.runOutsideAngular(() => {
    //   setInterval(() => {
    //     this.counter += 1;
    //   }, 100);
    // })
  }

  onClick() {
    this.counter += 1;

    console.log('Increment');
  }
}
