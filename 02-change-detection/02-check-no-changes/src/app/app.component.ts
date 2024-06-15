import { AfterViewChecked, ApplicationRef, ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'check-no-changes';
  counter = 0;

  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  private readonly applicationRef = inject(ApplicationRef);

  ngAfterViewChecked(): void {
    this.counter += 1;
    
    console.log('Increment', this.counter);

    // this.changeDetectorRef.detectChanges();
    // this.applicationRef.tick();
    // this.changeDetectorRef.checkNoChanges();
    // setTimeout(() => {
    //   this.counter += 1;
    
    //   console.log('Increment', this.counter);
    // })
  }

  onLogTitle() {
    console.log(this.counter);
  }
}
