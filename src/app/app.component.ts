import { Appreil } from './appreil';
import { Component } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  //déclaration des variables//

  title = 'mon-projet-angular';
  isAuth: boolean = false;
  lastUpdate : Date = new Date();
  appareils : Appreil[] = [];
  btnmsg : string = "tout Allumer";

  //fin déclaration**********//

constructor(private appareilservice : AppareilService){
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
    
  this.appareils = this.appareilservice.appareils;
  
}
onSwitch(){
  this.appareilservice.onSwitch();
  this.appareilservice.switch = !this.appareilservice.switch;
  this.btnmsg = this.appareilservice.btnmsg;
  console.log(this.isAuth)
}

}

