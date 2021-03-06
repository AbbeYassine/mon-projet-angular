import {Component, OnInit} from '@angular/core';
import {Appareil} from '../appareil';
import {User} from '../user';
import {AppareilService} from '../services/appareil.service';
import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  //déclaration des variables//

  title = 'mon-projet-angular';
  isAuth: boolean = false;
  lastUpdate: Date = new Date();
  appareils: Appareil[] = [];
  btnmsg: string = 'tout Allumer';
  user: User;

  //fin déclaration**********//

  constructor(private appareilservice: AppareilService,
              private storageService: StorageService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);

    // this.appareils = this.appareilservice.appareils;

    this.appareilservice.getAllAppareils()
      .subscribe(
        (data: Appareil[]) => {
          console.log(data);
          this.appareils = data;
          this.appareilservice.appareils = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  ngOnInit() {
    this.user = new User();
    this.user = this.storageService.read<User>('user');
    console.log(this.user);
  }

  onSwitch() {
    this.appareilservice.onSwitch();
    this.appareilservice.switch = !this.appareilservice.switch;
    this.btnmsg = this.appareilservice.btnmsg;
    console.log(this.isAuth);
  }
}
