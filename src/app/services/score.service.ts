import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private listeJoueurs: User[] = [
    {
      nom: 'Joueur un',
      scoreUn: 2,
      scoreDeux: null,
      scoreTrois: null,
      scoreQuatre: null,
      scoreCinq: null,
      scoreSix: null,
      scoreBrelan: null,
      scorePSuite: null,
      scoreGSuite: null,
      scoreFull: null,
      scoreCarre: null,
      scoreYam: null,
    },
    {
      nom: 'Joueur deux',
      scoreUn: null,
      scoreDeux: null,
      scoreTrois: null,
      scoreQuatre: null,
      scoreCinq: null,
      scoreSix: null,
      scoreBrelan: null,
      scorePSuite: null,
      scoreGSuite: null,
      scoreFull: null,
      scoreCarre: null,
      scoreYam: null,
    }
  ];

  constructor() { }

  get joueurs() {
    return this.listeJoueurs;
  }
}
