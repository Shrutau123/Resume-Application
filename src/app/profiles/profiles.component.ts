import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],
})
export class ProfilesComponent implements OnInit {
  users: any[] = [];
  constructor(private userService: UserServiceService) {}
  ngOnInit(): void {
    this.userService.getAllProfiles().subscribe(
      (res: any) => {
        const users: any[] = res;
        return (this.users = users);
      },
      (e: any) => {}
    );
  }
}
