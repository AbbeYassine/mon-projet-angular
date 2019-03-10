import {Component, OnInit} from '@angular/core';
import {Appareil} from '../appareil';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  switch: boolean = true;

  lastUpdate: Date = new Date();

  appareils: Appareil[] = [];

  isAuth: boolean = false;


  constructor(private appareilService: AppareilService) {
    this.appareils = this.appareilService.appareils;

    setTimeout(
      () => {
        this.isAuth = true;
      },
      4000
    );
  }

  ngOnInit() {
  }

  onSwitch() {
    this.switch = !this.switch;
    this.appareilService.onSwitch(this.switch);
  }

}
