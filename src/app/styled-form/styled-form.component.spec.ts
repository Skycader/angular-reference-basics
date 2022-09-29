import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledFormComponent } from './styled-form.component';

describe('StyledFormComponent', () => {
  let component: StyledFormComponent;
  let fixture: ComponentFixture<StyledFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyledFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyledFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
