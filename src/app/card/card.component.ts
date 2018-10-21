import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() card: Card;
  width: number;
  height: number;

  ngOnInit() {
    this.width = 200;
    this.height = 300;
  }

  getWidth() {
    return this.width.toString;
  }

  getCardCoverStyle() {
    return {
      'min-width': this.width.toString,
      'min-height': this.height.toString
    };
  }

}
