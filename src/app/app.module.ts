import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CoursesComponent} from './courses.component';
import { CourseComponent } from './course/course.component';
import {CoursesService} from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import {AuthorserviceService} from './authorservice.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';




@NgModule({
  declarations: [
    AppComponent,
      CoursesComponent,
      CourseComponent,
      AuthorsComponent,
      FavoriteComponent,
      PanelComponent
  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [
      CoursesService,
      AuthorserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
