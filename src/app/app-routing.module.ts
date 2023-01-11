import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileByIdComponent } from './profile-by-id/profile-by-id.component';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GuestGuard } from './auth/guest.guard';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProfilesComponent } from './profiles/profiles.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard],
  },

  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [GuestGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'profile',
    component: ProfileComponent,
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'education',
    component: EducationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profiles',
    component: ProfilesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile/:id',
    component: ProfileByIdComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
