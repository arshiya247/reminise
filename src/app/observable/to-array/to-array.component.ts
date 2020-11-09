import { Component, OnInit } from '@angular/core';
import { Subscription, interval, from, of } from 'rxjs';
import { toArray, take } from 'rxjs/operators';
@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
users=[
  {name: 'Arshi', skill:'cooking'},
  {name: 'Farzeen' , skill:'cook'},
  {name: 'Avaaram' , skill:'chef'}
]
  constructor() { }
  subsIns:Subscription;
  ngOnInit(): void {
    
    const ObsIns=interval(1000);
     this.subsIns=ObsIns.pipe(take(4),
      toArray()).subscribe(res=>{
      console.log(res);
    // if(res>=7){
    //   //   this.subsIns.unsubscribe();
    //   // };
     })

    const fromIns=from(this.users);
    fromIns.pipe(toArray()).subscribe(res=>{
      console.log(res)
    })

    const ofIns=of(this.users);
    ofIns.pipe(toArray()).subscribe(res=>{
      console.log(res)
    })
  }

}
