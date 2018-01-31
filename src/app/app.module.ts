import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CoursesComponent} from './courses.component';
import { CourseComponent } from './course/course.component';
import {CoursesService} from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import {AuthorserviceService} from './authorservice.service';




@NgModule({
  declarations: [
    AppComponent,
      CoursesComponent,
      CourseComponent,
      AuthorsComponent
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