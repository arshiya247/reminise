import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from 'src/app/includes/apiService';
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit,OnDestroy {
techStatus='error';
sampleArr=[{name:'Arshia',skill:'Cooking'},
{name:'farz',skill:'eating'},
{name:'avaa',skill:'sleeping'},
{name:'aliaa',skill:'movies'}]
sampleArr2=['hfs','ftewyuds','wfqtyasuhh']
names;
  constructor(private service:ApiService) { }

  custIntSubscriptionHandler:Subscription;
  ngOnInit(): void {
//     const customObs=Observable.create(observer=>{
//       setTimeout(()=>{observer.next('Data from timeout function 1')},1000);
//       setTimeout(()=>{observer.next('Data from timeout function 2')},2000);
//       setTimeout(()=>{observer.next('Data from timeout function 3')},3000);
//       setTimeout(()=>{observer.next('Data from timeout function 4')},4000);
//       setTimeout(()=>{observer.next('Data from timeout function 5')},5000);
//       setTimeout(()=>{observer.next('Data from timeout function 6')},6000);
//       setTimeout(()=>{observer.next(new Error('ERRORR---RREED from timeout function'));
//     },7000);
//       observer.next('Data from next');
//     })
//     customObs.subscribe((res)=>{
//      this.service.print(res,"createObsContainer");
//     },
//     (err)=>{
//      this.techStatus='error';
//     },
//     ()=>{
// this.techStatus='completed';  
//     }
//     )
    let count=0;
    let count1=0;
    // const customIntervalObs=Observable.create(observer=> {
    //   setInterval(()=>{
    //     observer.next(this.sampleArr[count]);
        
    //     if(count>=3){
    //       observer.complete();
    //     }
    //     count++;
       
    //   },2000);
        
        
    // })
  //  this.custIntSubscriptionHandler=customIntervalObs.subscribe(res=>{
  //    this.service.print(res,'C');
  
  //  })

   const randomObs=Observable.create(observer=>{
     observer.next(this.sampleArr2[count1]);
     
     if(count1>=2){
       observer.complete();
     }
     count1++;
   })

this.custIntSubscriptionHandler=randomObs.subscribe(res=>{
 // this.service.print(res,'cusIntObsContainer')
 this.names=res;
})

  }
  ngOnDestroy(){
    this.custIntSubscriptionHandler.unsubscribe();
  }

}
