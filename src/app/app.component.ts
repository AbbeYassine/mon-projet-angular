import {Component} from '@angular/core';
import {Appareil} from './appareil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello';

  isAuth: boolean = false;



  appareilOne: string = 'Iphone';
  appareilTwo: string = 'Ordinateur';
  appareilThree: string = 'Frigo';

  lastUpdate: Date = new Date();

  appareils: Appareil[] = [];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      },
      4000
    );

    this.appareils = [
      {
        name: 'Iphone',
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

  onAllumer() {
    console.log('On allume tout !');
  }


}
