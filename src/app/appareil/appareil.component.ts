import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from './../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

@Input()
appareilName : string = 'Machine à laver';
@Input()
AppareilStatus : boolean ;
@Input()
id : string;
  constructor(private appareilservice : AppareilService) { 

  }

  ngOnInit() {

  }
  getStatus(){
    return this.AppareilStatus;
  }
  getColor(){
    if(this.AppareilStatus){
      return 'green';
    } else {
      return 'red';
    }
  }
  delete(){
    
  }
  onSwitch() {
    this.appareilservice.switchById(!this.AppareilStatus, this.id) 
  }
}
