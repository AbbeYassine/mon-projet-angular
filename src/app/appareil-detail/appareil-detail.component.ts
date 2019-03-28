import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Appareil} from '../appareil';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil-detail',
  templateUrl: './appareil-detail.component.html',
  styleUrls: ['./appareil-detail.component.scss']
})
export class AppareilDetailComponent implements OnInit {
  appareil: Appareil;
  id: string;

  constructor(private appreilservice: AppareilService,
              private route: ActivatedRoute) {

    this.appareil = new Appareil();
    this.appareil._id = this.route.snapshot.params['id'];
    this.id = this.appareil._id;
  }

  ngOnInit() {
    this.appreilservice.getAppareilById(this.appareil._id)
      .subscribe(
        (data: Appareil) => {
          this.appareil = data;
        });
  }

}
