import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-saisie-score',
  templateUrl: './saisie-score.component.html',
  styleUrls: ['./saisie-score.component.scss']
})
export class SaisieScoreComponent implements OnInit {
  score: number;
  constructor(public scoreService: ScoreService) { }

  ngOnInit(): void {
  }

  validerScore() {
    this.scoreService.saveScore(this.score);
    this.score = null;
  }

  barrerScore() {
    this.scoreService.barrerScore();
  }

}
