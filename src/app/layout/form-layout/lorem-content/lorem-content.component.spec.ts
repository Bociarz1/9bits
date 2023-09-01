import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremContentComponent } from './lorem-content.component';

describe('LoremContentComponent', () => {
  let component: LoremContentComponent;
  let fixture: ComponentFixture<LoremContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoremContentComponent]
    });
    fixture = TestBed.createComponent(LoremContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
