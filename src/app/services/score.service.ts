import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private currentIndex = 0;
  currentValue = null;
  private listeJoueurs: User[] = [
    {
      nom: 'Joueur un',
      scoreUn: 2,
      scoreDeux: null,
      scoreTrois: -1,
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

  saveScore() {
    this.joueurSuivant();
  }

  barrerScore() {
    this.listeJoueurs[this.currentIndex][this.currentValue] = -1;
    this.joueurSuivant();
  }

  private joueurSuivant() {
    this.currentValue = null;
    if (this.currentIndex >= this.listeJoueurs.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = 0;
    }
  }

  get currentName() {
    if (this.currentIndex < this.listeJoueurs.length) {
      return this.listeJoueurs[this.currentIndex].nom;
    }
    return '';
  }

  selectScore(score: string) {
    if (this.currentIndex >= this.listeJoueurs.length) {
      this.currentValue = null;
    } else {
      if (this.listeJoueurs[this.currentIndex][score] == null) {
        this.currentValue = score;
      } else {
        this.currentValue = null;
      }
    }
  }
}
