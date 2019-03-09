import {Injectable} from '@angular/core';
import {Appareil} from '../appareil';

@Injectable()
export class AppareilService {

  appareils: Appareil[];

  constructor() {
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

  onSwitch(status: boolean) {
    for (const appareil of  this.appareils) {
      appareil.status = status;
    }
  }
}
