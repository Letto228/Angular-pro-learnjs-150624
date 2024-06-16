import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'signals';

  get name(): string {
    console.log('Render');

    return 'Egor';
  }

  readonly count = signal(0);

  constructor() {
    // console.log(this.count());

    // this.count.set(2);

    // console.log(this.count());

    // this.count.update(value => value + 1);

    // setInterval(() => {
    //   this.count.update(value => value + 1);

    //   console.log(this.count());
    // }, 1000)

    // const doubleCount = computed(() => {
    //   const value = this.count() * 2;

    //   console.log('Computed', value)
      
    //   return value;
    // });

    // console.log('Value: ', doubleCount());
    // console.log('Value: ', doubleCount());

    // this.count.set(5);

    // console.log('Value: ', doubleCount());
    // console.log('Value: ', doubleCount());
    // console.log('Value: ', doubleCount());
    // console.log('Value: ', doubleCount());
    // console.log('Value: ', doubleCount());

    // const showCount = signal(false);
    // const count = signal(0);

    // const conditionalCount = computed(() => {
    //   console.log(`Recalculate`);

    //   if (showCount()) {
    //     return `the count is ${count()}`
    //   }

    //   return `Nothing`;
    // })

    // console.log(`1: `, conditionalCount());

    // count.update(value => value + 1);

    // console.log(`2: `, conditionalCount());
    // console.log(`3: `, conditionalCount());
    // console.log(`4: `, conditionalCount());

    // showCount.set(true);

    // console.log(`5: `, conditionalCount());

    // count.update(value => value + 1);

    // console.log(`6: `, conditionalCount());
    // console.log(`7: `, conditionalCount());
    // console.log(`8: `, conditionalCount());

    // showCount.set(false);

    // console.log(`9: `, conditionalCount());

    // count.update(value => value + 1);

    // console.log(`10: `, conditionalCount());
    // console.log(`11: `, conditionalCount());
    // console.log(`12: `, conditionalCount());

    // console.log(count);

    setInterval(() => {
      this.count.update(value => value + 1);

      console.log(this.count());
    }, 1000)

    const eff = effect(onCleanup => {
      console.log(`the count is ${this.count()}`)

      const timer = setTimeout(() => {
        console.log('timer');
      }, 5000);

      onCleanup(() => {
        clearTimeout(timer);
      });
    });

    // eff.destroy();
  }
}
