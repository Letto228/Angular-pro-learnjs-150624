import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShqllAppComponent } from './shqll-app.component';

describe('ShqllAppComponent', () => {
  let component: ShqllAppComponent;
  let fixture: ComponentFixture<ShqllAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShqllAppComponent]
    });
    fixture = TestBed.createComponent(ShqllAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
