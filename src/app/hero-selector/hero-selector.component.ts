import { Component, OnInit } from '@angular/core';
import { HeroCard } from '../interfaces/hero-card';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { CardSelectorService } from '../card-selector.service';
import { Router } from '@angular/router';
import { PlayerSyncSocketsService } from '../player-sync-sockets.service';

@Component({
  selector: 'app-hero-selector',
  templateUrl: './hero-selector.component.html',
  styleUrls: ['./hero-selector.component.css']
})
export class HeroSelectorComponent implements OnInit {

  allCards: HeroCard[] = [];
  selectedCard: number;
  cardWidth = 200;
  cardHeight = 300;
  cardShowStats = false;
  cardSelectionForm: FormGroup;
  validCardNumber = 1;
  waitForPlayers = false;

  constructor(
    private _cardSelectorService: CardSelectorService,
    private _router: Router,
    private _playerSyncSocketsService: PlayerSyncSocketsService) { }

  ngOnInit() {
    if (!sessionStorage.getItem('username')) {
      this._router.navigate(['join']);
    }
    this._playerSyncSocketsService.allPlayersReady().subscribe(data => this._router.navigate(['board']));

    this._cardSelectorService.getHeroCards().subscribe(
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

    for (let i = row * 3; i < (row + 1) * 3; i++) {
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
    this.selectedCard = -1;
    for (let i = 0; i < this.allCards.length; i++) {
      if (this.cardsSelectors.controls[i].value) {
        this.selectedCard = this.allCards[i].id;
      }
    }
    console.log('You have selected the cards: ', this.selectedCard);
    this._cardSelectorService.postHeroCards(sessionStorage.getItem('username'), this.selectedCard).subscribe(
      data => {
        this.waitForPlayers = true;
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
