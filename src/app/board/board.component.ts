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
  cardWidth = 200;
  cardHeight = 300;

  constructor() { }

  ngOnInit() {
    // this.box1.push({
    //   name: 'Macanache',
    //   heatlh: 8,
    //   attack: 8,
    //   cost: 8,
    //   description: 'Cum te bate MACANACHE nu te bate Dumnezeu.',
    //   team: 'Boschetar',
    //   photo_url: 'https://hearthcards.ams3.digitaloceanspaces.com/33/58/8d/5b/33588d5b.png'
    // });
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

}
