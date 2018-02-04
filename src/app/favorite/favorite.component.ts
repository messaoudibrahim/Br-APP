import { Component, OnInit, Input,Output } from '@angular/core';
import {EventEmitter} from 'selenium-webdriver';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('nickName') isFavorite: boolean;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

    onClick(){
    this.isFavorite = !this.isFavorite;
  }

}
