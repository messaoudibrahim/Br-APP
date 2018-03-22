import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zipy.component.html',
  styleUrls: ['./zipy.component.css']
})
export class ZipyComponent {

@Input('title') title:string;
 title = 'shipping content';
}
