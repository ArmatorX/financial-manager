import { NgModule } from '@angular/core';
import { AuthenticationModule } from '../authentication.module';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    AuthenticationModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
