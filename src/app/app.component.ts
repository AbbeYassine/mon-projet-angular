import {Component} from '@angular/core';
import {Appareil} from './appareil';
import {AppareilService} from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello';

  isAuth: boolean = false;

  switch: boolean = true;


  appareilOne: string = 'Iphone';
  appareilTwo: string = 'Ordinateur';
  appareilThree: string = 'Frigo';

  lastUpdate: Date = new Date();

  appareils: Appareil[] = [];

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      },
      4000
    );
    this.appareils = this.appareilService.appareils;
  }

  onSwitch() {
    this.switch = !this.switch;
    this.appareilService.onSwitch(this.switch);
  }


}
