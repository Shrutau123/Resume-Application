import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  logout(){
    localStorage.removeItem('user')
  }
  public checkUser(): Observable<any> {
    return this.http.get<any>(environment.baseUrl + 'profile')
  }
}
