import {Injectable} from '@angular/core';
import {Appareil} from '../appareil';

@Injectable()
export class AppareilService {

  appareils: Appareil[];

  constructor() {
    this.appareils = [
      {
        id: 1,
        name: 'Iphone',
        status: true
      },
      {
        id: 2,
        name: 'Ordinateur',
        status: false
      },
      {
        id: 3,
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

  switchById(status: boolean, appareilId: number) {
    this.getAppareilById(appareilId).status = status;
  }

  getAppareilById(appareilId: number) {
    return this.appareils.find(
      (appareil) => {
        return appareil.id === appareilId;
      }
    );
  }
}
