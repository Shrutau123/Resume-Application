import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-by-id',
  templateUrl: './profile-by-id.component.html',
  styleUrls: ['./profile-by-id.component.css'],
})
export class ProfileByIdComponent implements OnInit {
  id: any;
  user: any = {};
  constructor(
    private userService: UserServiceService,
    private router: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      if (!params['id']) {
        // Redirect back
        return;
      }
      this.userService.getProfileById(params['id']).subscribe(
        (response) => {
          this.user = response;
        },
        (e: any) => {}
      );
    });
    this.id = this.router.snapshot.paramMap.get('id');
  }
}
