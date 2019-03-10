import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService,
              private router: Router) {

    this.authStatus = this.authService.isAuth;
  }

  ngOnInit() {
  }

  onSignIn() {
    this.authService.signIn()
      .then(
        () => {
          this.authStatus = this.authService.isAuth;
          console.log('Sign in successuful');
          this.router.navigate(['appareils']);
        }
      );
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
