import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Card } from '../interfaces/card';
import { BoardService } from '../board.service';
import { Router } from '@angular/router';
import { MinionCard } from '../interfaces/minion-card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  cardWidth = 120;
  cardHeight = 160;
  boardIndexes = [0, 1, 2, 3, 4, 5, 6, 7];
  boardIds = ['board1', 'board0', 'board3', 'board5'];
  positions = ['Y Goalkeeper', 'Y Defenders', 'E Forwards', 'Y Midfielders',
    'E Midfielders', 'Y Forwards', 'E Defenders', 'E Goalkeeper'];

  constructor(
    private _boardService: BoardService,
    private _router: Router) { }

  ngOnInit() {
    if (!sessionStorage.getItem('username')) {
      this._router.navigate(['join']);
    }
  }

  drop(event: CdkDragDrop<Card[]>) {
    console.log(event);
    if (this.waiting) {
      return;
    }
    if (!this.myTurn) {
      return;
    }
    if (event.previousContainer === event.container) {
      return;
    } else {
      if (event.container.id === 'functional_use' && event.previousContainer.id === 'functional') {
        const card = this.myFunctionals[event.previousIndex];
        this._boardService.waiting = true;
        this._boardService.playCard(sessionStorage.getItem('username'), card.id, 'F', null).subscribe(data => console.log(data));
      }
      if (event.container.id === 'board0' && event.previousContainer.id === 'hand') {
        const card = this.myHand[event.previousIndex];
        this._boardService.waiting = true;
        this._boardService.playCard(sessionStorage.getItem('username'), card.id, 'M', 'GOALKEEPER').subscribe(data => console.log(data));
      }
      if (event.container.id === 'board1' && event.previousContainer.id === 'hand') {
        const card = this.myHand[event.previousIndex];
        this._boardService.waiting = true;
        this._boardService.playCard(sessionStorage.getItem('username'), card.id, 'M', 'DEFENCE').subscribe(data => console.log(data));
      }
      if (event.container.id === 'board3' && event.previousContainer.id === 'hand') {
        const card = this.myHand[event.previousIndex];
        this._boardService.waiting = true;
        this._boardService.playCard(sessionStorage.getItem('username'), card.id, 'M', 'MID').subscribe(data => console.log(data));
      }
      if (event.container.id === 'board5' && event.previousContainer.id === 'hand') {
        const card = this.myHand[event.previousIndex];
        this._boardService.waiting = true;
        this._boardService.playCard(sessionStorage.getItem('username'), card.id, 'M', 'ATTACK').subscribe(data => console.log(data));
      }
      return;
    }
  }

  getScore(i: number): number {
    return this.scores()[i];
  }

  getLine(i: number): MinionCard[] {
    return this.lines()[i];
  }

  getPositionName(i: number) {
    return this.positions[i];
  }

  getId(i: number): string {
    return 'board' + i;
  }

  endTurn() {
    if (this.myTurn) {
      this._boardService.endTurn(sessionStorage.getItem('username')).subscribe(data => console.log(data));
    }
  }

  endRound() {
    if (this.myTurn) {
      this._boardService.endTurn(sessionStorage.getItem('username')).subscribe(data =>
        this._boardService.endRound(sessionStorage.getItem('username')).subscribe(data2 => console.log(data2)));
    }
  }

  scores(): number[] {
    return [this._boardService.myGoalkepperScore, this._boardService.myDefendersScore, this._boardService.enemyForwardsScore,
      this._boardService.myMidfieldersScore, this._boardService.enemyMidfieldersScore, this._boardService.myForwardsScore,
      this._boardService.enemyDefendersScore, this._boardService.enemyGoalkepperScore];
  }

  lines(): MinionCard[][] {
    return [[this._boardService.myGoalkepper], this._boardService.myDefenders, this._boardService.enemyForwards,
      this._boardService.myMidfielders, this._boardService.enemyMidfielders, this._boardService.myForwards,
      this._boardService.enemyDefenders, [this._boardService.enemyGoalkepper]];
  }

  get username() {
    return sessionStorage.getItem('username');
  }

  get myTurn() {
    return this._boardService.myTurn;
  }
  get myHero() {
    return this._boardService.myHero;
  }
  get enemyHero() {
    return this._boardService.enemyHero;
  }
  get myHand() {
    return this._boardService.myHand;
  }
  get myFunctionals() {
    return this._boardService.myFunctionals;
  }
  get myScore() {
    return this._boardService.myScore;
  }
  get enemyScore() {
    return this._boardService.enemyScore;
  }
  get waiting() {
    return this._boardService.waiting;
  }
  get roundInfo() {
    return this._boardService.roundInfo;
  }
}
