import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup = new FormGroup(
    {
      'name': new FormControl(null,
        [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      Validators.pattern(/ *[A-Z][a-z] /)]),

      'email': new FormControl(null, [Validators.required]),

      'password': new FormControl(null,
        [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)]),

      'repassword': new FormControl(null,
        [Validators.required]),

      'phone': new FormControl(null,
        [Validators.required])


    }
  )

  register(){
    console.log(this.registerForm);
    
  }
}
