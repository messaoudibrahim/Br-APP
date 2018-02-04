import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  /*tweet = {
    body: '...',
      countLike : 10,
      isLiked: true
  }*/

//viewMode = 'ma';

  courses = [
      { id : 1, name: 'course1' },
      { id : 2, name: 'course2' },
      { id : 3, name: 'course3' },
  ];
}
