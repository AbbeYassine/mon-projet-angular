import { Appreil } from './appreil';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mon-projet-angular';
  isAuth: boolean = false;

  lastUpdate : Date = new Date();

  appareils : Appreil[] = [];
  constructor(){
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
    this.appareils = [
      {
        name: 'Iphone 5',
        status: true
      },
      {
        name: 'Ordinateur',
        status: false
      },
      {
        name: 'Frigo',
        status: true
      }
    ];

    }
  
  onAllumer(){
    console.log(this.isAuth)
  }
  
}

