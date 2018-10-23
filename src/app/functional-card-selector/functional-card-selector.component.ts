import { Component, OnInit } from '@angular/core';
import { Card } from '../interfaces/card';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-functional-card-selector',
  templateUrl: './functional-card-selector.component.html',
  styleUrls: ['./functional-card-selector.component.css']
})
export class FunctionalCardSelectorComponent implements OnInit {

  allCards: Card[] = [];
  selectedCards: Card[] = [];
  cardWidth = 200;
  cardHeight = 300;
  cardShowStats = false;
  cardSelectionForm: FormGroup;

  photo_url = 'https://hearthcards.ams3.digitaloceanspaces.com/33/58/8d/5b/33588d5b.png'; // remove this

  constructor() { }

  ngOnInit() {
    /* PLS IGNORE THIS CHAOS */ this.allCards.push({name: 'Macanache', heatlh: 1, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});   this.allCards.push({name: 'Macanache', heatlh: 2, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 3, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 4, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 5, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 6, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 7, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 8, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 9, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 10, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});

    const cardSelectionFormArray = new FormArray([]);
    this.allCards.forEach(card => {
      cardSelectionFormArray.push(new FormControl(null));
    });
    this.cardSelectionForm = new FormGroup({'cardsSelectors': cardSelectionFormArray});
  }

  getRowNumbers(): number[] {
    return [0, 1];
  }

  getCardsNumbers(row: number): number[] {
    const cardsNumbers: number[] = [];

    for (let i = row * 5; i < (row + 1) * 5; i++) {
      cardsNumbers.push(i);
    }
    return cardsNumbers;
  }

  getCardOpacity(formNumber): number {
    if (this.cardsSelectors.controls[formNumber].value) {
      return 1;
    }
    return 0.65;
  }

  get cardsSelectors(): FormArray {
    return <FormArray>this.cardSelectionForm.get('cardsSelectors');
  }

  onSubmit() {
    this.selectedCards = [];
    for (let i = 0; i < 10; i++) {
      if (this.cardsSelectors.controls[i].value) {
        this.selectedCards.push(this.allCards[i]);
      }
    }
    console.log('You have selected the cards: ', this.selectedCards);
  }
}
