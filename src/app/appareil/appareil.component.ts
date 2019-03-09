import { Component, OnInit, Input } from '@angular/core';

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
  constructor() { 

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
}
