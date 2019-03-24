import { Injectable } from '@angular/core';
import { Appreil } from './../appreil';
import {HttpClient} from '@angular/common/http';
import { Config } from '../config';
import { User } from './../user';

@Injectable()
export class AppareilService {

    //déclaration des variables//
    appareils : Appreil[];
    switch : boolean = false;
    // fin declaration//

    constructor(private httpClient : HttpClient){
   
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

switchById(status: boolean, appareilId: string) {
    this.appareils.find(
      (appareil) => {
        return appareil._id === appareilId;
      }
    ).status = status;
  }
  getAppareilById(id : string){
    
    return this.httpClient.get(Config.BaseUrl + 'appareils/' + id )
  }
  getAllAppareils(){

    return this.httpClient.get(Config.BaseUrl + 'appareils');  
  
  }
  addAppareil(appareil : Appreil){
    return this.httpClient.post(Config.BaseUrl + 'appareils',appareil);
  }
  updateAppareil(appareil : Appreil){
    return this.httpClient.put(Config.BaseUrl + 'appareils/'+ appareil._id,appareil);
  }
  
}