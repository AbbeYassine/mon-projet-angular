import { Component, OnInit } from '@angular/core';
import { Appreil } from './../appreil';
import { AppareilService } from './../services/appareil.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var swal: any;

@Component({
  selector: 'app-appareil-form',
  templateUrl: './appareil-form.component.html',
  styleUrls: ['./appareil-form.component.scss']
})
export class AppareilFormComponent implements OnInit {
appreil: Appreil;
  constructor( private appareilService :AppareilService , 
               private router : Router ,
               private route: ActivatedRoute) {
    this.appreil = new Appreil();
   }
operation : boolean = false
  ngOnInit() {
this.operation = this.router.url.includes('add')
if(!this.operation){
  this.appareilService.getAppareilById(this.route.snapshot.params['id'])
  .subscribe(
    (data : Appreil)=>{
      console.log(data );
      this.appreil = data;
      this.appreil.status = this.appreil.status ? '1' : '0';
    }
  )
}
  }
  
  onSubmit(){

    let baseContext = this;
    console.log(this.appreil);
    this.appreil.status = parseInt(this.appreil.status,0) !== 0;
    console.log(this.appreil);
    if(this.operation){
    this.appareilService.addAppareil(this.appreil)
    .subscribe(
      (data)=>{
        console.log(data)
        swal({
          type : 'success',
          title: 'Success', 
          text :'Appareil ajout avec succées',
        }
          ).then(
            ()=>{ 
                baseContext.router.navigate(['/appareils']);
            }
          );
             },
      (error)=>{
        console.log(error)
        alert(error);
      } 
    );
  }else{
    this.appareilService.updateAppareil(this.appreil)
    .subscribe(
      (data)=>{
        console.log(data)
        swal({
          type : 'success',
          title: 'Success', 
          text :'Appareil modif avec succées',
        }
          ).then(
            ()=>{ 
                baseContext.router.navigate(['/appareils']);
            }
          );
             },
      (error)=>{
        console.log(error)
      } 
    );
  }
}
}
