import {Component, OnInit} from '@angular/core';
import {Appareil} from '../appareil';

@Component({
  selector: 'app-appareil-form',
  templateUrl: './appareil-form.component.html',
  styleUrls: ['./appareil-form.component.scss']
})
export class AppareilFormComponent implements OnInit {

  appareil: Appareil;

  constructor() {
    this.appareil = new Appareil();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.appareil);
  }

}
