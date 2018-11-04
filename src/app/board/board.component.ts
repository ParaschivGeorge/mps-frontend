import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Card } from '../interfaces/card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  box1: Card[] = [];
  box2: Card[] = [];
  cardWidth = 120;
  cardHeight = 160;
  boardIndexes = [0, 1, 2, 3, 4, 5, 6, 7];
  boardIds = ['board0', 'board1', 'board3', 'board5'];
  positions = ['Y Goalkeeper', 'Y Defenders', 'E Forwards', 'Y Midfielders',
    'E Midfielders', 'Y Forwards', 'E Defenders', 'E Goalkeeper'];
  card = {
    name: 'Macanache',
    defense: 10,
    attack: 10,
    url: 'https://hearthcards.ams3.digitaloceanspaces.com/33/58/8d/5b/33588d5b.png'
  };
  waiting = false;

  constructor() { }

  ngOnInit() {
    this.box1.push(this.card);
    this.box1.push(this.card);
  }

  drop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  getScore(i: number): number {
    return 12;
  }

  getPositionName(i: number) {
    return this.positions[i];
  }

  getId(i: number): string {
    return 'board' + i;
  }

}
