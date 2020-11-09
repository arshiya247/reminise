import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { ApiService } from 'src/app/includes/apiService';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
msg;
count=0;
videoSubs:Subscription;
  constructor(private service:ApiService) { }

  ngOnInit(): void {
    //const intervalIns=interval(1000);
    const intervalIns=timer(5000,2000);
   this.videoSubs= intervalIns.subscribe(res => {this.msg=res+this.count+'video';
   this.service.print(this.msg,'elContainer');
   if(res>=5){
     this.videoSubs.unsubscribe();
   }
    }
    )
  }


}
