import { AuthService } from './auth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  token?:string| null;


  constructor(private auth:AuthService) {
    //console.log(this.auth.isLoggedIn());
   }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.token = this.auth.isLoggedIn();
    if (this.token) {
      const tokenizedReq = req.clone({ headers: req.headers.set('Authorization', this.token) });
      return next.handle(tokenizedReq);
    }
    return next.handle(req);
  }
}
