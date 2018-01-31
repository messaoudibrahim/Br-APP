import {Component} from '@angular/core';
import {CoursesService} from './courses.service';
import {pipe} from 'rxjs/util/pipe';

@Component({
    selector: 'courses',
    template: `        
       <input type="text" [(ngModel)]="title"/>
        <br>
        {{ title }}
    `
})
export class  CoursesComponent {
    /*emp = true;
    fill = false;
    change(){
        this.emp = !this.emp;
        this.fill = !this.fill;
        console.log('click');
    }*/
    title: string;

}
