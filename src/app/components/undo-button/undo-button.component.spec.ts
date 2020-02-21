import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoButtonComponent } from './undo-button.component';

describe('UndoButtonComponent', () => {
  let component: UndoButtonComponent;
  let fixture: ComponentFixture<UndoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndoButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
