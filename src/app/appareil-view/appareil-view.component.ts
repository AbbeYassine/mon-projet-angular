import { Component, OnInit } from '@angular/core';
import { AppareilService } from './../services/appareil.service';
import { Appreil } from './../appreil';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  //déclaration des variables//

  title = 'mon-projet-angular';
  isAuth: boolean = false;
  lastUpdate : Date = new Date();
  appareils : Appreil[] = [];
  btnmsg : string = "tout Allumer";

  //fin déclaration**********//

  constructor(private appareilservice : AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
    
  //this.appareils = this.appareilservice.appareils;

  this.appareilservice.getAllAppareils()
  .subscribe(
    (data : Appreil[]) => {
      console.log(data);
      this.appareils = data;
      this.appareilservice.appareils = data;
    },
    (error) => {
      console.log(error);
    }
  )
   }

  ngOnInit() {
  }
  onSwitch(){
    this.appareilservice.onSwitch();
    this.appareilservice.switch = !this.appareilservice.switch;
    this.btnmsg = this.appareilservice.btnmsg;
    console.log(this.isAuth)
  }
}
