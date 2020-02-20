import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrilleScoreComponent } from './grille-score.component';

describe('GrilleScoreComponent', () => {
  let component: GrilleScoreComponent;
  let fixture: ComponentFixture<GrilleScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrilleScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrilleScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
