import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/includes/apiService';
import { of, from } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {
 sampleObj={
   a:'Anup',
   b:'Shekhar',
   c:'Sharma'
 }
 sampleObjArr=['Arshi','Avaram','Farzeen'];
  constructor(private service:ApiService) { }

  ngOnInit(): void {
    const ofIns=of('Anup','Shekhar','Sharma');
    ofIns.subscribe(res=>{
      this.service.print(res,'ofContainer');
    })

    const ofIns2=of(this.sampleObj.a,this.sampleObj.b,this.sampleObj.c);
    ofIns2.subscribe(res=>{
      this.service.print(res,'ofContainer2');
    })


    const fromIns=from(['Arshi','Avaram','Farzeen']
    );
    fromIns.subscribe(res=>{
      this.service.print(res,'fromContainer');
    })


    const prom=new Promise((resolve,reject)=>{
      resolve(this.sampleObjArr);
    })

    const promCon=from(prom);
    promCon.subscribe(res=>{
      this.service.print(res,'promObsContainer')
    })

    const strFrom=from('Welcome to Arshiyaa home sweet home');
    strFrom.subscribe(res=>this.service.print(res,'strObsContainer'))
  }

}
