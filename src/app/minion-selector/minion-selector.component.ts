import { Component, OnInit } from '@angular/core';
import { Card } from '../interfaces/card';

@Component({
  selector: 'app-minion-selector',
  templateUrl: './minion-selector.component.html',
  styleUrls: ['./minion-selector.component.css']
})
export class MinionSelectorComponent implements OnInit {

  allCards: Card[] = [];
  selectedCards: Card[] = [];

  photo_url = 'https://hearthcards.ams3.digitaloceanspaces.com/33/58/8d/5b/33588d5b.png'; // remove this

  constructor() { }

  ngOnInit() {
    /* PLS IGNORE THIS CHAOS */ this.allCards.push({name: 'Macanache', heatlh: 1, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});   this.allCards.push({name: 'Macanache', heatlh: 2, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 3, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 4, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 5, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 6, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 7, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 8, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 9, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 10, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 11, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 12, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 13, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 14, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 15, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 16, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 17, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 18, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 19, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 20, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 21, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 22, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 23, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 24, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});
  }

}
