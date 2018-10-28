import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    // language=Angular4HTML
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

    onClick() {
    this.isFavorite = !this.isFavorite;
    // @ts-ignore
        this.change.emit(this.isFavorite);
  }

}
