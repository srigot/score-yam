import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-saisie-score',
  templateUrl: './saisie-score.component.html',
  styleUrls: ['./saisie-score.component.scss']
})
export class SaisieScoreComponent implements OnInit {

  constructor(public scoreService: ScoreService) { }

  ngOnInit(): void {
  }

}
