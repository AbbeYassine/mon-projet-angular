import { Injectable } from '@angular/core';
import { Appreil } from './../appreil';


@Injectable()
export class AppareilService {

    //déclaration des variables//
    appareils : Appreil[];
    switch : boolean = false;
    // fin declaration//

    constructor(){
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
    for(const appreil of this.appareils){
        appreil.status = true;
    }
}
onEteindre(){
    for(const appreil of this.appareils){
        appreil.status = false;
    }
}
btnmsg = "tout Allumer";
onSwitch(){
    if(this.switch){
        this.onAllumer();
        this.btnmsg = "tout Eteindre";
    }else{
        this.onEteindre();
        this.btnmsg = "tout Allumer";
    }
    
}
}