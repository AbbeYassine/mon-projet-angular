import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input()
  id: number;

  @Input()
  appareilName: string;

  @Input()
  appareilStatus: boolean;

  constructor(private appareilService: AppareilService) {
  }

  ngOnInit() {
  }

  onSwitch() {
    this.appareilService.switchById(!this.appareilStatus, this.id);
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus) {
      return 'green';
    } else {
      return 'red';
    }
  }

}
