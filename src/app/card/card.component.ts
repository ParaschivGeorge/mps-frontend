import { Component, OnInit } from '@angular/core';
import { Card } from '../interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  card: Card;
  width: number;
  height: number;

  ngOnInit() {
    this.card = {
      name: 'Macanache',
      heatlh: 8,
      attack: 8,
      cost: 8,
      description: 'Cum te bate MACANACHE nu te bate Dumnezeu.',
      team: 'Boschetar',
      photo_url: 'https://hearthcards.ams3.digitaloceanspaces.com/33/58/8d/5b/33588d5b.png'
    };
    this.width = 400;
    this.height = 600;
  }

}
