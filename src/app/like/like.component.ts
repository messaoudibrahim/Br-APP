import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent  {

  @Input('countLike') countLike: number;
  @Input('isActive') isActive: boolean;
  constructor() { }

  onClick(){
    this.countLike += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }

}
