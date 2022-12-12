import { SnackbarService } from './../services/snackbar.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  email: string | null = null;
  password: string | null = null;
  newUser = true;
  loginForm?: NgForm;
  users: any[] = [];

  
  constructor(private authService: AuthService, private router: Router, private _snackBar: SnackbarService) {  }
  
  ngOnInit(): void {
  }


  loginUser(valid: boolean) {
    
   this.authService.login({
      email: this.email,
      password: this.password
    })
    .subscribe((res: any) => {
      const found=res.token
        localStorage.setItem('user',found)
        this.authService.userCreated.next(this.newUser)
        this.router.navigate(['/dashboard'])
    }, (e: any) => {
      
      this._snackBar.open('Invalid','Dismiss');
    })
  }

 
 
}
