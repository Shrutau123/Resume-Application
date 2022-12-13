import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType:String='default';
  isAuthenticated:boolean|undefined;

  constructor(private router:Router,private auth:AuthService,private userService:UserServiceService) { }

  ngOnInit(): void {
    this.auth.userCreated.subscribe(
      res=>{
    this.isAuthenticated=res;
   }
   )
    if(this.auth.isLoggedIn()){
      this.auth.userCreated.next(true)
    }
  }
  


  logout(){
    if(this.auth.isLoggedIn()){
      this.userService.logout()
      this.router.navigate(['/'])
      this.auth.userCreated.next(false)
    }
  }

}
