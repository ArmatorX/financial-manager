import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../shared-authentication/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private navController: NavController,
    private auth: AuthService) { }

  ngOnInit() {
  }

  signInWithGoogle() {
    this.auth.signInWithGoogle().then(() => this.navController.navigateRoot(["/expenses/graph"]));
  }
}
