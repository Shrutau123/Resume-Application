import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from '../password-validators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private router: Router, private _snackBar: MatSnackBar) {}
  myForm: FormGroup | undefined;
  users = {};
  

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: new FormControl('', { validators: [Validators.required] }),
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', [Validators.required, Validators.minLength(8)]],
      
    }, {
      validator: MustMatch('password', 'password2')
    }
    );
  }
  onSubmit(form: FormGroup) {
   
    this.users = {
      'name': form.value.name,
      'email': form.value.email,
      'password': form.value.password,
      'password2': form.value.password2
    };

    this.httpClient.post(environment.baseUrl+'users/register'
      , this.users).subscribe(response => {console.log(response)}
      , (e: any) => {
        this._snackBar.open('Invalid', 'dismiss', { duration: 3000 });
      });
    this._snackBar.open('Registration Successful', 'dismiss', { duration: 3000 });
    this.router.navigate([''])
  }


  
 
}





