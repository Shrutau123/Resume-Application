import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GuestGuard } from './auth/guest.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'

},
{
  path: 'login',
  component: LoginComponent,
  canActivate: [GuestGuard]
},

{
  path: 'signup',
  component: SignupComponent,
  canActivate: [GuestGuard]
},
{
  path: 'dashboard',
  component: DashboardComponent,
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  canActivate: [AuthGuard]
},

{
  path: 'profile',
  component: ProfileComponent,
  loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
  canActivate: [AuthGuard]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
