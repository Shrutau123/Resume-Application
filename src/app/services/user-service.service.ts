import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  logout(){
    localStorage.removeItem('user')
  }
  public checkUser(): Observable<any> {
    return this.http.get(environment.baseUrl + 'profile')
  }
  getAllProfiles(): Observable<any>{
    return this.http.get(environment.baseUrl + 'profile/all').pipe(
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

  getProfileById(_id:any): Observable<any>{
   return this.http.get(environment.baseUrl + 'profile/handle/'+_id)
  }
  
}
