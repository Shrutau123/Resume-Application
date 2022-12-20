import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';
import { UserServiceService } from '../services/user-service.service';

interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  selectedValue: string | undefined;
  myForm: FormGroup | undefined;
  view = false;
  isEdit = false;
  profile = {};
  handle: string | undefined;
  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userService: UserServiceService
  ) {
    console.log(this.auth.isLoggedIn());
  }
  stat: Status[] = [
    { value: 'developer', viewValue: 'Developer' },
    { value: 'junior developer', viewValue: 'Junior Developer' },
    { value: 'senior developer', viewValue: 'Senior Developer' },
    { value: 'manager', viewValue: 'Manager' },
    { value: 'student or learning', viewValue: 'Student or Learning' },
    { value: 'instructor or teacher', viewValue: 'Instructor or Teacher' },
    { value: 'intern', viewValue: 'Intern' },
    { value: 'other', viewValue: 'Other' },
  ];

  ngOnInit(): void {
    this.userService.checkUser().subscribe(
      (res: any) => {
        console.log(res);
        if (res._id) {
          this.isEdit = true;
          this.myForm?.patchValue({
            handle: res.handle,
            status: res.status,
            company: res.company,
            website: res.website,
            location: res.location,
            skills: res.skills,
            githubusername: res.githubusername,
            bio: res.bio,
            twitter: res.social['twitter'],
            facebook: res.social['facebook'],
            linkedin: res.social['linkedin'],
            youtube: res.social['youtube'],
            instagram: res.social['instagram'],
          });
        }
      },
      (e: any) => {}
    );

    this.myForm = this.fb.group({
      handle: new FormControl('', { validators: [Validators.required] }),
      status: ['', [Validators.required, Validators.email]],
      company: ['', [Validators.required, Validators.minLength(8)]],
      website: ['', [Validators.required, Validators.minLength(8)]],
      location: ['', [Validators.required, Validators.minLength(8)]],
      skills: ['', [Validators.required, Validators.minLength(8)]],
      githubusername: ['', [Validators.required, Validators.minLength(8)]],
      bio: ['', [Validators.required, Validators.minLength(8)]],
      displaySocialInputs: [
        this.view,
        [Validators.required, Validators.minLength(8)],
      ],
      twitter: [null, [Validators.required, Validators.minLength(8)]],
      facebook: [null, [Validators.required, Validators.minLength(8)]],
      linkedin: [null, [Validators.required, Validators.minLength(8)]],
      youtube: [null],
      instagram: [null, [Validators.required, Validators.minLength(8)]],
    });
  }
  onDisplaySocialInputs() {
    this.view = !this.view;
  }

  onSubmit(form: FormGroup) {
    this.profile = {
      handle: form.value.handle,
      status: form.value.status,
      company: form.value.company,
      website: form.value.website,
      location: form.value.location,
      skills: form.value.skills,
      githubusername: form.value.githubusername,
      bio: form.value.bio,
      displaySocialInputs: form.value.displaySocialInputs,
      twitter: form.value.twitter,
      facebook: form.value.facebook,
      linkedin: form.value.linkedin,
      youtube: form.value.youtube,
      instagram: form.value.instagram,
    };
    this.http
      .post<any>(environment.baseUrl + 'profile', this.profile)
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/dashboard']);
        },
        (e: any) => {
          console.log(e);
        }
      );
  }
}
