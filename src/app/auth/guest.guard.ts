import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  routeUrl:String ;
  constructor(private authService:AuthService,private router:Router){
    this.routeUrl=this.router.url;

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    const user=this.authService.isLoggedIn();
      if(user){
        this.router.navigate(['/dashboard']);
        return false;
      }
      else{
        return true;
      }
  }
  
}
