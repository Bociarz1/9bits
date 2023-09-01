import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputAreaComponent } from './text-input-area.component';

describe('TextInputAreaComponent', () => {
  let component: TextInputAreaComponent;
  let fixture: ComponentFixture<TextInputAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextInputAreaComponent]
    });
    fixture = TestBed.createComponent(TextInputAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
