import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {interval} from 'rxjs';

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

    const observable = interval(500);

    observable.subscribe(
      (value) => {
        console.log(value);
      },
      (error) => {
        console.log('Error');
      },
      () => {
        console.log('Completed');
      }
    );
  }

  onSignIn() {
    let i = 2;
    this.authService.signIn()
      .then(
        () => {
          this.authStatus = this.authService.isAuth;
          console.log('Sign in successuful');
          this.router.navigate(['appareils']);
        }
      );
    console.log(i);
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
