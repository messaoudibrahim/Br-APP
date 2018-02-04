<<<<<<< HEAD
import { Component, OnInit, Input,Output } from '@angular/core';
import {EventEmitter} from 'selenium-webdriver';
=======
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
>>>>>>> modif

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
<<<<<<< HEAD
  @Input('nickName') isFavorite: boolean;
=======
  @Input() isFavorite: boolean;
>>>>>>> modif
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

    onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
  }

}
