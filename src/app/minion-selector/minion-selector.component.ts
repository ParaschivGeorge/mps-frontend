import { Component, OnInit } from '@angular/core';
import { Card } from '../interfaces/card';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-minion-selector',
  templateUrl: './minion-selector.component.html',
  styleUrls: ['./minion-selector.component.css']
})
export class MinionSelectorComponent implements OnInit {

  allCards: Card[] = [];
  selectedCards: Card[] = [];
  cardWidth = 120;
  cardHeight = 180;
  cardShowStats = false;
  cardSelectionForm: FormGroup;
  validCardNumber = 11;

  photo_url = 'https://hearthcards.ams3.digitaloceanspaces.com/33/58/8d/5b/33588d5b.png'; // remove this

  constructor() { }

  ngOnInit() {
    /* PLS IGNORE THIS CHAOS */ this.allCards.push({name: 'Macanache', heatlh: 1, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});   this.allCards.push({name: 'Macanache', heatlh: 2, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 3, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 4, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 5, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 6, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 7, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 8, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 9, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 10, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 11, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 12, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 13, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 14, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 15, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 16, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 17, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 18, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 19, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 20, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 21, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 22, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 23, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});    this.allCards.push({name: 'Macanache', heatlh: 24, attack: 1, cost: 1, description: '', team: '', photo_url: this.photo_url});

    const cardSelectionFormArray = new FormArray([]);
    this.allCards.forEach(card => {
      cardSelectionFormArray.push(new FormControl(null));
    });
    this.cardSelectionForm = new FormGroup({'cardsSelectors': cardSelectionFormArray}, this.CardsSelectorValidator.bind(this));
  }

  getRowNumbers(): number[] {
    return [0, 1, 2, 3];
  }

  getCardsNumbers(row: number): number[] {
    const cardsNumbers: number[] = [];

    for (let i = row * 6; i < (row + 1) * 6; i++) {
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
    if (!this.cardSelectionForm.valid) {
      console.log('You must select ', this.validCardNumber, ' cards');
      return;
    }
    this.selectedCards = [];
    for (let i = 0; i < this.allCards.length; i++) {
      if (this.cardsSelectors.controls[i].value) {
        this.selectedCards.push(this.allCards[i]);
      }
    }
    console.log('You have selected the cards: ', this.selectedCards);
  }

  CardsSelectorValidator(c: FormGroup) {
    let count = 0;

    (<FormArray>(c.get('cardsSelectors'))).controls.forEach(control => {
      if (control.value) {
        count++;
      }
    });
    if (count !== this.validCardNumber) {
      return { wrongNumber: true };
    }
    return null;
  }

  getSelectedCardsCount(): number {
    let count = 0;

    this.cardsSelectors.controls.forEach(control => {
      if (control.value) {
        count++;
      }
    });
    return count;
  }
}
