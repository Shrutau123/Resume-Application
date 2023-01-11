import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './../services/generic.service';
import { AuthService } from './../services/auth.service';
import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isValid = false;
  token?: string | null;
  company: any[] | undefined;
  school: any[] | undefined;
  tokenInfo = this.gene.getDecodedAccessToken(this.auth.isLoggedIn()!);
  displayedColumns: string[] = ['company', 'title', 'years', 'delete'];
  displayedColumns1: string[] = [
    'school',
    'degree',
    'fieldofstudy',
    'years',
    'delete',
  ];
  constructor(
    private userService: UserServiceService,
    private auth: AuthService,
    private gene: GenericService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.checkUser().subscribe(
      (res: any) => {
        this.company = res.experience;
        this.school = res.education;
        const dataSource = this.company;
      },
      (e: any) => {
        this.isValid = true;
      }
    );
  }

  deleteExp(doc: any, i: any) {
    this.http
      .delete(environment.baseUrl + 'profile/experience/' + doc)
      .subscribe(
        (response: any) => {
          this.company?.splice(i, 1);
          this.company = response.experience;
        },
        (e: any) => {}
      );
  }

  deleteEdu(doc: any, i: any) {
    this.http
      .delete(environment.baseUrl + 'profile/education/' + doc)
      .subscribe(
        (response: any) => {
          this.school?.splice(i, 1);
          this.school = response.education;
        },
        (e: any) => {}
      );
  }

  deleteUser() {
    this.http.delete(environment.baseUrl + 'profile').subscribe(
      (response: any) => {
        this.userService.logout();
        this.router.navigate(['/']);
        this.auth.userCreated.next(false);
      },
      (e: any) => {}
    );
  }
}
