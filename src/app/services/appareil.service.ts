import {Injectable} from '@angular/core';
import {Appareil} from '../appareil';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppareilService {

  appareils: Appareil[];

  constructor(private httpClient: HttpClient) {

  }

  getAllAppareils() {
    return this.httpClient
      .get('http://localhost:3000/api/appareils');
  }

  addAppareil(appareil: Appareil) {
    return this.httpClient
      .post('http://localhost:3000/api/appareils', appareil);
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
