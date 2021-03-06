import { Component, OnInit } from '@angular/core';
import { Card } from '../interfaces/card';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CardSelectorService } from '../card-selector.service';
import { FunctionalCard } from '../interfaces/functional-card';

@Component({
  selector: 'app-functional-card-selector',
  templateUrl: './functional-card-selector.component.html',
  styleUrls: ['./functional-card-selector.component.css']
})
export class FunctionalCardSelectorComponent implements OnInit {

  allCards: FunctionalCard[] = [];
  selectedCards: number[] = [];
  cardWidth = 200;
  cardHeight = 300;
  cardShowStats = false;
  cardSelectionForm: FormGroup;
  validCardNumber = 5;

  constructor(private _cardSelectorService: CardSelectorService, private _router: Router) { }

  ngOnInit() {
    if (!sessionStorage.getItem('username')) {
      this._router.navigate(['join']);
    }
    this._cardSelectorService.getFunctionalCards().subscribe(
      cards => {
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
    return 0.75;
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
        this.selectedCards.push(this.allCards[i].id);
      }
    }
    console.log('You have selected the cards: ', this.selectedCards);
    this._cardSelectorService.postFunctionalCards(sessionStorage.getItem('username'), this.selectedCards).subscribe(
      data => {
        this._router.navigate(['hero-selector']);
      },
      err => {
        sessionStorage.removeItem('username');
        this._router.navigate(['join']);
    });
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
