import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavStepsComponent } from './nav-steps.component';

describe('NavStepsComponent', () => {
  let component: NavStepsComponent;
  let fixture: ComponentFixture<NavStepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavStepsComponent]
    });
    fixture = TestBed.createComponent(NavStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
