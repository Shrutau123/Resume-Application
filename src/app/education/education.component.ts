import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  eduForm: NgForm | undefined;
  checked = false;
  addEdu = {};

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  addEduUser(form: any) {
    this.addEdu = {
      school: form.value.school,
      degree: form.value.degree,
      fieldofstudy: form.value.fieldofstudy,
      from: form.value.from,
      to: form.value.to,
      current: form.value.current,
      description: form.value.description,
      disabled: form.value.current,
    };
    this.http
      .post<any>(environment.baseUrl + 'profile/education', this.addEdu)
      .subscribe(
        (response) => {
          this.router.navigate(['/dashboard']);
        },
        (e: any) => {}
      );
  }
}
