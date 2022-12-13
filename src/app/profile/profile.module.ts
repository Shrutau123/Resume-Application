import { SharedModule } from 'src/shared/shared.module';
import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class ProfileModule { }
