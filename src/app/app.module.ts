<<<<<<< Updated upstream
=======
import { DashboardModule } from './dashboard/dashboard.module';
import { MatFormFieldModule } from '@angular/material/form-field';
>>>>>>> Stashed changes
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream
=======
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HeaderComponent } from './header/header.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { AuthGuard } from './auth/auth.guard';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio'; 
import { InterceptorService } from './services/interceptor.service';


>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
<<<<<<< Updated upstream
  providers: [],
=======
  providers: [AuthGuard,LoginComponent,{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
   }],
>>>>>>> Stashed changes
  bootstrap: [AppComponent]
})
export class AppModule { }
