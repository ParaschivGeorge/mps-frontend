import { Component, OnInit } from '@angular/core';
import { Card } from '../interfaces/card';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { CardSelectorService } from '../card-selector.service';
import { MinionCard } from '../interfaces/minion-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minion-selector',
  templateUrl: './minion-selector.component.html',
  styleUrls: ['./minion-selector.component.css']
})
export class MinionSelectorComponent implements OnInit {

  allCards: MinionCard[] = [];
  selectedCards: number[] = [];
  cardWidth = 120;
  cardHeight = 180;
  cardShowStats = false;
  cardSelectionForm: FormGroup;
  validCardNumber = 11;
  maxCost = 110;

  constructor(private _cardSelectorService: CardSelectorService, private _router: Router) { }

  ngOnInit() {
    if (!sessionStorage.getItem('username')) {
      this._router.navigate(['join']);
    }
    this._cardSelectorService.getMinionCards().subscribe(cards => {
      console.log(cards);
      this.allCards = cards.result;
      const cardSelectionFormArray = new FormArray([]);
      this.allCards.forEach(card => {
        cardSelectionFormArray.push(new FormControl(null));
      });
      this.cardSelectionForm = new FormGroup({'cardsSelectors': cardSelectionFormArray}, this.CardsSelectorValidator.bind(this));
    });
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
    return 0.75;
  }

  get cardsSelectors(): FormArray {
    return <FormArray>this.cardSelectionForm.get('cardsSelectors');
  }

  onSubmit() {
    if (!this.cardSelectionForm.valid) {
      console.log('You must select ', this.validCardNumber, ' cards with a total cost of maximum ', this.maxCost);
      return;
    }
    this.selectedCards = [];
    for (let i = 0; i < this.allCards.length; i++) {
      if (this.cardsSelectors.controls[i].value) {
        this.selectedCards.push(this.allCards[i].id);
      }
    }
    console.log('You have selected the cards: ', this.selectedCards);
    this._cardSelectorService.postMinionCards(sessionStorage.getItem('username'), this.selectedCards).subscribe(
      data => {
        this._router.navigate(['functional-card-selector']);
      },
      err => {
        sessionStorage.removeItem('username');
        this._router.navigate(['join']);
    });
  }

  CardsSelectorValidator(c: FormGroup) {
    let count = 0;
    let i = 0;
    (<FormArray>(c.get('cardsSelectors'))).controls.forEach(control => {
      if (control.value) {
        count++;
      }
      i++;
    });
    if (count !== this.validCardNumber) {
      return { wrongNumber: true };
    }
    if (this.getTotalCost() > this.maxCost) {
      return { maxCostExceeded: true };
    }
    return null;
  }

  getTotalCost(): number {
    let totalCost = 0;

    let i = 0;
    (<FormArray>(this.cardSelectionForm.get('cardsSelectors'))).controls.forEach(control => {
      if (control.value) {
        totalCost += this.allCards[i].cost;
      }
      i++;
    });

    return totalCost;
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
