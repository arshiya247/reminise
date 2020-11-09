import { Component, OnInit } from '@angular/core';
import { count } from 'console';
import { from, fromEvent, interval, Subscription, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { ApiService } from 'src/app/includes/apiService';

@Component({
  selector: 'app-take-demo',
  templateUrl: './take-demo.component.html',
  styleUrls: ['./take-demo.component.scss'],
})
export class TakeDemoComponent implements OnInit {
  constructor(private service: ApiService) {}
  sampleArr = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
  ];
  count = 0;
  ngOnInit(): void {
    let subIns: Subscription;
    const obsIns = interval(1000);
    const obsIns1 = from(this.sampleArr);
    //const obsIns2 = from(this.sampleArr);
    let condition = timer(5000);
    let condition2 = fromEvent(document, 'click');
    // obsIns
    //   .pipe(
    //     map((res) => res * 10),
    //     take(5)
    //   )
    //   .subscribe((res) => {
    //     this.service.print(res, 'takeContainer');
    //   });

    // obsIns1
    //   .pipe(takeLast(5))
    //   .subscribe((res) => this.service.print(res, 'takeContainer1'));

    obsIns
      .pipe(takeUntil(condition))
      .subscribe((res) => this.service.print(res, 'takeContainer2'));
  }
}
