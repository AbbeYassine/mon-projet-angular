import {Component, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {ActivatedRoute} from '@angular/router';
import {Appareil} from '../appareil';

@Component({
  selector: 'app-appareil-detail',
  templateUrl: './appareil-detail.component.html',
  styleUrls: ['./appareil-detail.component.scss']
})
export class AppareilDetailComponent implements OnInit {


  appareil: Appareil;

  constructor(private appareilService: AppareilService,
              private route: ActivatedRoute) {

    this.appareil = new Appareil();
    this.appareil.id = parseInt(this.route.snapshot.params['appareilId'], 0);
  }

  ngOnInit() {
    this.appareil = this.appareilService
      .getAppareilById(this.appareil.id);
  }

}
