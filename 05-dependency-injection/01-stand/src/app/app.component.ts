import { ChangeDetectorRef, Component, ElementRef, Injectable, InjectionToken, Injector, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class Deps {
  constructor() {
    console.log('Create: Deps', Math.random());
  }
}

// @Injectable()
class TestDI {
  // private readonly deps = inject(Deps);

  // constructor(private readonly deps: Deps) {
  constructor() {
    // console.log('Create: TestDI', Math.random(), this.deps);
    console.log('Create: TestDI', Math.random(), inject(Deps));
    // setTimeout(() => {
    //   console.log('Create: TestDI', Math.random(), inject(Deps));
    // }, 1000)
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'stand';

  constructor() {
    console.log(inject(HttpClient));
    console.log(inject(ChangeDetectorRef));
    console.log(inject(ElementRef));
    
    const injectionToken = new InjectionToken('Test token');
    const parentInjectionToken = new InjectionToken('Test token', {providedIn: 'root', factory: () => 'Haha'});

    const parentInjector = Injector.create({
      providers: [
        {
          provide: parentInjectionToken,
          useValue: 'Alex',
        }
      ]
    });

    const injector = Injector.create({
      parent: parentInjector,
      providers: [
        {
          provide: injectionToken,
          useValue: 'Egor',
        },
        // {
        //   provide: 'surname',
        //   useExisting: 'name',
        // },
        // {
        //   provide: TestDI,
        //   useClass: TestDI,
        // },
        // Deps,
        // TestDI,
        // {
        //   provide: 'TestDI',
        //   useExisting: TestDI,
        // },
        // {
        //   provide: 'useFactory',
        //   useFactory: () => inject(TestDI),
        //   // useFactory: (testDI: TestDI) => testDI,
        //   // deps: [TestDI],
        // }
      ],
    });

    // console.log(injector.get('name'));
    // console.log(injector.get('surname'));
    // console.log(injector.get(TestDI));
    // console.log(injector.get('useFactory'));
    // console.log(injector.get(TestDI) === injector.get('TestDI'));
    // setTimeout(() => {
    //   console.log(injector.get(TestDI));
    // }, 2000)

    console.log(injector.get(injectionToken));
    console.log(injector.get(parentInjectionToken));
    console.log(inject(parentInjectionToken));
  }
}
