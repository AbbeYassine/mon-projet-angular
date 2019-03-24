import { Component, OnInit } from '@angular/core';
import { AppareilService } from './../services/appareil.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { Appreil } from './../appreil';

@Component({
  selector: 'app-appareil-detail',
  templateUrl: './appareil-detail.component.html',
  styleUrls: ['./appareil-detail.component.scss']
})
export class AppareilDetailComponent implements OnInit {
appareil: Appreil;
id : string;
  constructor(private appreilservice : AppareilService,
              private route: ActivatedRoute) { 
                
  this.appareil = new Appreil();
  this.appareil._id= this.route.snapshot.params['id'];
  this.id=this.appareil._id
              }

  ngOnInit() {
     this.appreilservice.getAppareilById(this.appareil._id)
    .subscribe(
      (data : Appreil) => {
        this.appareil = data;
      }); 
  }

}
