import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CoursesComponent} from './courses.component';
import { CourseComponent } from './course/course.component';
import {CoursesService} from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import {AuthorserviceService} from './authorservice.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import {InputFormatDirective} from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';




@NgModule({
  declarations: [
      // register all the compontents, pipes and directives
    AppComponent,
      CoursesComponent,
      CourseComponent,
      InputFormatDirective,
      AuthorsComponent,
      FavoriteComponent,
      PanelComponent,
      ContactFormComponent,
      SignupFormComponent,
      CourseFormComponent
  ],
    //register all the modules
  imports: [
    BrowserModule,
      FormsModule,
      ReactiveFormsModule
  ],
    // redister all the services
  providers: [
      CoursesService,
      AuthorserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
