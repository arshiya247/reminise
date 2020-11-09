import { Component, OnInit } from '@angular/core';
import { from, Subscription, interval, observable } from 'rxjs';
import { map,  pluck,  tap, toArray } from 'rxjs/operators';
import { ApiService } from 'src/app/includes/apiService';

@Component({
  selector: 'app-tapdemo',
  templateUrl: './tapdemo.component.html',
  styleUrls: ['./tapdemo.component.scss']
})
export class TapdemoComponent implements OnInit {
  sampleArr = [
    { id: 1, name: 'nfv', gender: 'Male' },
    { id: 2, name: 'hkfjsn', gender: 'Female' },
    { id: 3, name: 'nfvgh', gender: 'Male' },
     { id: 4, name: 'nfhyv', gender: 'Male' },
    { id: 5, name: 'hjsnsrd', gender: 'Female' },
    { id: 6, name: 'hn', gender: 'Female' },
    { id: 7, name: 'hjsnafsg', gender: 'Female' }, 
     { id: 8, name: 'nfwerv', gender: 'Male' }, 
    { id: 9, name: 'nfvsdf', gender: 'Male' }, 
    { id: 10, name: 'nfvsd', gender: 'Male' },
  ];
  constructor(private _service: ApiService) { }
count=0;
  ngOnInit(): void {
  
let subIns:Subscription;
  const fromIns=interval(1000);
  const fromRealIns=from(this.sampleArr);
  subIns=fromIns.pipe(map(res=> this.sampleArr[this.count]), tap( 
    res=>{if(res.id>=7){
      subIns.unsubscribe();
    };
  this.count++;}
  )
  ).
  subscribe(res=>{;

    
    this._service.print(res,"tapDemContainer")});



  
  }

}
