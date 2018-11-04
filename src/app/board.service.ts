import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Socket } from 'ngx-socket-io';
import { HeroCard } from './interfaces/hero-card';
import { FunctionalCard } from './interfaces/functional-card';
import { MinionCard } from './interfaces/minion-card';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  myTurn: boolean;

  myHero: HeroCard;
  enemyHero: HeroCard;

  myFunctionals: FunctionalCard[];
  myHand: MinionCard[];

  myGoalkepper: MinionCard;
  myDefenders: MinionCard[];
  myMidfielders: MinionCard[];
  myForwards: MinionCard[];
  enemyGoalkepper: MinionCard;
  enemyDefenders: MinionCard[];
  enemyMidfielders: MinionCard[];
  enemyForwards: MinionCard[];

  myGoalkepperScore: number;
  myDefendersScore: number;
  myMidfieldersScore: number;
  myForwardsScore: number;
  enemyGoalkepperScore: number;
  enemyDefendersScore: number;
  enemyMidfieldersScore: number;
  enemyForwardsScore: number;

  myScore: number;
  enemyScore: number;

  waiting = true;

  round = 3;

  constructor(private _httpClient: HttpClient, private _socket: Socket) {
    this.gameplay().subscribe(data => {
      console.log(Object.keys(data));
      console.log('gameplay ', data);
      const player = data[sessionStorage.getItem('username')];
      const enemy = data[Object.keys(data).filter(p => p !== sessionStorage.getItem('username'))[0]];
      console.log(player);
      console.log(enemy);
      this.myHero = player.cards.hero;
      this.enemyHero = enemy.cards.hero;

      this.myFunctionals = player.cards.functional;
      this.myHand = player.cards.minions;

      this.myGoalkepper = player.board.goalkeeper.card;
      this.myDefenders = player.board.defence.cards;
      this.myMidfielders = player.board.mid.cards;
      this.myForwards = player.board.attack.cards;
      this.enemyGoalkepper = enemy.board.goalkeeper.card;
      this.enemyDefenders = enemy.board.defence.cards;
      this.enemyMidfielders = enemy.board.goalkeeper.cards;
      this.enemyForwards = enemy.board.mid.cards;

      this.myGoalkepperScore = player.board.goalkeeper.score;
      this.myDefendersScore = player.board.defence.score;
      this.myMidfieldersScore = player.board.mid.score;
      this.myForwardsScore = player.board.attack.score;
      this.enemyGoalkepperScore = enemy.board.goalkeeper.score;
      this.enemyDefendersScore = enemy.board.defence.score;
      this.enemyMidfieldersScore = enemy.board.goalkeeper.score;
      this.enemyForwardsScore = enemy.board.mid.score;

      this.myScore = player.totalPoints;
      this.enemyScore = enemy.totalPoints;

      this.waiting = false;
    });

    this.turn().subscribe(data => {
      console.log('turn ', data);
      this.myTurn = data === sessionStorage.getItem('username');
    });
   }

  playCard(username: string, cardId: number, cardType: string, position: string): Observable<any> {
    return this._httpClient.post<any>(environment.apiUrl + '/play_card',
      {username: username, card_id: cardId, card_type: cardType, position: position});
  }

  endTurn(username: string): Observable<any> {
    return this._httpClient.post<any>(environment.apiUrl + '/end_turn',
      {username: username});
  }

  turn(): Observable<any> {
    return this._socket
      .fromEvent('turn');
  }

  gameplay(): Observable<any> {
    return this._socket
      .fromEvent('gameplay');
  }
}
