import { Component, Injector, TemplateRef, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { DeclaratedComponent } from './declarated/declarated.component';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: 'name',
      useValue: 'Egor',
    }
  ]
})
export class AppComponent {
  title = 'insert-stand';

  @ViewChild('viewContainer', {static: true, read: ViewContainerRef})
  private container!: ViewContainerRef;

  readonly injector = inject(Injector);
  readonly component$ = from(import('./undeclarated/undeclarated.component')).pipe(
    map(m => m.UndeclaratedComponent)
  );

  onClickComponent() {
    // const injector = Injector.create({parent: injector, providers: [
    //   {
    //     provide: 'name',
    //     useValue: 'Egor',
    //   }
    // ]})

    // this.container.createComponent(DeclaratedComponent, {injector: this.injector});

    import('./undeclarated/undeclarated.component').then(({UndeclaratedComponent}) => {
      this.container.createComponent(UndeclaratedComponent, {injector: this.injector});
    });
  }

  onClickTemplate(template: TemplateRef<unknown>) {
    this.container.createEmbeddedView(template, {$implicit: 'Alex', surname: 'Test'});
  }

  onClickClear() {
    this.container.clear();
  }

}
