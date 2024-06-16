import { Component, ElementRef, ViewChild } from '@angular/core';
import { CatComponent } from './animals/cat/cat.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contentchildren-by-service';

  // @ViewChild('name')
  // private name: string | undefined;

  // @ViewChild(CatComponent)
  // @ViewChild('cat')
  // private catComponent: CatComponent | undefined;

  @ViewChild('cat', {read: ElementRef, static: true})
  private catComponent: ElementRef | undefined;
}
