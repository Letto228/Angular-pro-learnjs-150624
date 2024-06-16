import { Component, ProviderToken, inject } from '@angular/core';

@Component({
  selector: 'app-declarated',
  templateUrl: './declarated.component.html',
  styleUrls: ['./declarated.component.css']
})
export class DeclaratedComponent {
  name = inject('name' as any as ProviderToken<any>);
}
