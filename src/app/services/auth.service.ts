import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  userCreated = new Subject<boolean>();
  isUserLoggedIn: boolean = false;

  public getAllUsers(): Observable<any> {
    return this.http.get<any>(environment.baseUrl)
      .pipe(
        map((res: any) => {
          const users: any[] = [];
          Object.keys(res)
            .forEach((key: any) => {
              users.push({ ...res[key], id: key })
            })
          console.log(users)
          return users;
        })
      );
  }

  //  Todo: Interface
  public login(data: any): Observable<any> {
    return this.http.post<any>(environment.baseUrl + 'users/login', data)
  }

  isLoggedIn() {
    return localStorage.getItem('user');
  }

  checkUser() {
    return this.http.get<any>(environment.baseUrl + 'profile')
  }

}
