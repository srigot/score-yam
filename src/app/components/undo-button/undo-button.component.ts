import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-undo-button',
  templateUrl: './undo-button.component.html',
  styleUrls: ['./undo-button.component.scss']
})
export class UndoButtonComponent implements OnInit {

  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
  }

  undo() {
    this.scoreService.undo();
  }
}
