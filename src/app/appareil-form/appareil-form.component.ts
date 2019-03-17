import {Component, OnInit} from '@angular/core';
import {Appareil} from '../appareil';
import {AppareilService} from '../services/appareil.service';
import {Router} from '@angular/router';

declare var swal: any;

@Component({
  selector: 'app-appareil-form',
  templateUrl: './appareil-form.component.html',
  styleUrls: ['./appareil-form.component.scss']
})
export class AppareilFormComponent implements OnInit {

  appareil: Appareil;

  constructor(private appareilService: AppareilService,
              private router: Router) {
    this.appareil = new Appareil();
  }

  ngOnInit() {
  }

  onSubmit() {
    let baseContext = this;
    console.log(this.appareil);
    this.appareil.status = parseInt(this.appareil.status) !== 0;
    this.appareilService.addAppareil(this.appareil)
      .subscribe(
        (data) => {

          console.log(data);
          swal({
            title: 'Succéss',
            text: 'Appareil ajout avec succées',
            icon: 'success'
          })
            .then((value) => {
              baseContext.router.navigate(['/appareils']);
            });
        },
        (error) => {
          console.log(error);
        }
      );

  }

}
