import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isValid=false

  constructor(private userService: UserServiceService,private _snackBar:MatSnackBar ) {}

  ngOnInit(): void {
    
    this.userService.checkUser().subscribe((res: any) => {     
       console.log(res);
       
    }, (e: any) => {
      console.log(e);
      this.isValid=true

      
     
    })

  }

}
