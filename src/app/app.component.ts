import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post  = {
    title: 'titre',
      isFavorite: true
  };
    onFavoriteChanged(isFavorite) {
      console.log("favorite changed : ", isFavorite);
    }
}
