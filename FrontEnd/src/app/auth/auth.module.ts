import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [SigninComponent, SignupComponent]
})
export class AuthModule {
}
