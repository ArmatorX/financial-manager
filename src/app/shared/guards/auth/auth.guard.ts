import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/authentication/shared-authentication/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private navController: NavController) {}

  canActivate(): Observable<boolean> {    
    const isLoggedIn$ = this.auth.isLoggedIn();

    isLoggedIn$.subscribe(this.checkIfLoggedIn);

    return isLoggedIn$;
  }
  
  checkIfLoggedIn(isLoggedIn: boolean) {
    if (!isLoggedIn) {
      this.navController.navigateRoot(["/auth/login"]);
    }

    return isLoggedIn;
  }
}
