import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from './../services/appareil.service';

declare var swal: any;

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input()
  appareilName: string = 'Machine à laver';
  @Input()
  AppareilStatus: boolean;
  @Input()
  id: string;

  constructor(private appareilservice: AppareilService) {

  }

  ngOnInit() {

  }

  getStatus() {
    return this.AppareilStatus;
  }

  getColor() {
    if (this.AppareilStatus) {
      return 'green';
    } else {
      return 'red';
    }
  }

  delete() {
    this.appareilservice.deleteAppareilById(this.id)
      .subscribe(
        (data) => {
          console.log(data);
          swal({
            type: 'success',
            title: 'Success',
            text: 'appareil deleted avec succées',
          })
            .then(
              () => {
                let index = this.appareilservice.appareils.map(
                  item => {
                    return item._id;
                  }).indexOf(this.id);
                this.appareilservice.appareils.splice(index, 1);
              }
            );
        }
      );
  }

  onSwitch() {
    this.appareilservice.switchById(!this.AppareilStatus, this.id);
  }
}
