import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardSelectorService {

  constructor(private _httpClient: HttpClient) { }

  getMinionCards(): Observable<any> {
    return this._httpClient.get<any>(environment.apiUrl + '/minions_cards');
  }

  getFunctionalCards(): Observable<any> {
    return this._httpClient.get<any>(environment.apiUrl + '/functional_cards');
  }

  getHeroCards(): Observable<any> {
    return this._httpClient.get<any>(environment.apiUrl + '/heroes_cards');
  }

  postMinionCards(username: string, cardsIndexList: number[]): Observable<any> {
    return this._httpClient.post<any>(environment.apiUrl + '/minions_cards_selector', {username: username, cards: cardsIndexList});
  }

  postFunctionalCards(username: string, cardsIndexList: number[]): Observable<any> {
    return this._httpClient.post<any>(environment.apiUrl + '/functional_cards_selector', {username: username, cards: cardsIndexList});
  }

  postHeroCards(username: string, cardIndex: number): Observable<any> {
    return this._httpClient.post<any>(environment.apiUrl + '/hero_card_selector', {username: username, card: cardIndex});
  }
}
