import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  expFrom: NgForm | undefined;
  checked = false;
  addExp = {};

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  addExpUser(form: any) {
    console.log(form.value.title);
    this.addExp = {
      title: form.value.title,
      company: form.value.company,
      location: form.value.location,
      from: form.value.from,
      to: form.value.to,
      current: form.value.current,
      description: form.value.description,
      disabled: form.value.current,
    };
    this.http
      .post<any>(environment.baseUrl + 'profile/experience', this.addExp)
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/dashboard']);
        },
        (e: any) => {}
      );
  }

  triggerSomeEvent() {
    this.checked = !this.checked;
    return;
  }
}
