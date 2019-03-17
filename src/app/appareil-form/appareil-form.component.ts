import {Component, OnInit} from '@angular/core';
import {Appareil} from '../appareil';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil-form',
  templateUrl: './appareil-form.component.html',
  styleUrls: ['./appareil-form.component.scss']
})
export class AppareilFormComponent implements OnInit {

  appareil: Appareil;

  constructor(private appareilService: AppareilService) {
    this.appareil = new Appareil();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.appareil);

    this.appareilService.addAppareil(this.appareil)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );

  }

}
