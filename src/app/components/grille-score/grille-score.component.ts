import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/services/score.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-grille-score',
  templateUrl: './grille-score.component.html',
  styleUrls: ['./grille-score.component.scss']
})
export class GrilleScoreComponent implements OnInit {
  constructor(public scoreService: ScoreService) { }

  ngOnInit(): void {
  }

  totalHaut(joueur: User) {
    return joueur.scoreUn + joueur.scoreDeux + joueur.scoreTrois + joueur.scoreQuatre + joueur.scoreCinq + joueur.scoreSix;
  }

  prime(joueur: User) {
    if (this.totalHaut(joueur) > 63) { return 37; }
    return null;
  }

  totalAvecPrime(joueur: User) {
    return this.totalHaut(joueur) + this.prime(joueur);
  }

  totalBas(joueur: User) {
    return joueur.scoreBrelan + joueur.scorePSuite + joueur.scoreGSuite + joueur.scoreFull + joueur.scoreCarre + joueur.scoreYam;
  }

  total(joueur: User) {
    return this.totalAvecPrime(joueur) + this.totalBas(joueur);
  }

}
