import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  constructor() { }

    log(x){
    console.log(x);
    }
    submit(val) {
    console.log('valeur de notre formulaire', val);
    }
  ngOnInit() {
  }

}
