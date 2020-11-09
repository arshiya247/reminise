import { Component, OnInit } from '@angular/core';
import { interval, Subscription, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/includes/apiService';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private service:ApiService) { }
  msg;
  msg1;
  msg2;
subsIns:Subscription;
subsIns1:Subscription;
subsIns2:Subscription;
sampleObj=[{id:'1',name:'cdvf'},
{id:'2',name:'dfg'},
{id:'3',name:'Ardcfgshi'},
{id:'4',name:'Ardcfvgbshi'},
{id:'5',name:'fgbhnArshi'},
{id:'6',name:'dsfgArshi'},
{id:'7',name:'Arsdcfhi'},
{id:'8',name:'Arssdfdghi'},
{id:'9',name:'Arsdsbfghi'}]
count=0;
  ngOnInit(): void {
    const intIns=interval(1000);
this.subsIns=intIns.pipe(map(data => data+'video')).subscribe(res=>{
 this.msg=res;
});

setTimeout(()=>{this.subsIns.unsubscribe()},5000);

const intIns1=interval(1000);

this.subsIns1=intIns1.pipe(map(data=> data*10)).subscribe(res=>this.msg1=res);

setTimeout(()=>{this.subsIns1.unsubscribe()} , 4000);
  
const intIns2=from(this.sampleObj);
intIns2.pipe(map(
  data=>{ 
  this.service.print(data.name,'fromMapContainer')
  }
)).subscribe(res=>this.msg2=res);

//setTimeout(()=>{this.subsIns2.unsubscribe()},8000);
}



}
