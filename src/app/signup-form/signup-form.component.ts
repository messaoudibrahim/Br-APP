import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidatorsUsername} from '../validators.username';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

    form = new  FormGroup({
        username: new FormControl('',
            [Validators.required,
                Validators.minLength(3),
                ValidatorsUsername.cannotContainSpace
            ]),
        password: new FormControl('', [Validators.required,
        Validators.minLength(3)
        ])
    });

    get username(){
        return this.form.get('username');
    }
}
