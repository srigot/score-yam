import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieScoreComponent } from './saisie-score.component';

describe('SaisieScoreComponent', () => {
  let component: SaisieScoreComponent;
  let fixture: ComponentFixture<SaisieScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisieScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
