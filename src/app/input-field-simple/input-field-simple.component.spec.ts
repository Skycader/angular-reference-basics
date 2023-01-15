import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldSimpleComponent } from './input-field-simple.component';

describe('InputFieldSimpleComponent', () => {
  let component: InputFieldSimpleComponent;
  let fixture: ComponentFixture<InputFieldSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFieldSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFieldSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
