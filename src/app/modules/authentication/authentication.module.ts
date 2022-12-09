import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';



@NgModule({
  declarations: [],
  imports: [SharedModule],
  exports: [SharedModule]
})
export class AuthenticationModule { }
