import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from 'src/app/includes/apiService';

@Component({
  selector: 'app-replay-subject-demo',
  templateUrl: './replay-subject-demo.component.html',
  styleUrls: ['./replay-subject-demo.component.scss'],
})
export class ReplaySubjectDemoComponent implements OnInit {
  user1 = [];
  user2 = [];
  user3 = [];
  displayBox: boolean = true;
  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;
  subscription2: Subscription;
  subscription3: Subscription;
  subscriptionInt: Subscription;
  constructor(private service: ApiService) {
    this.service.videoReplaySub.subscribe((res) => this.user1.push(res));
  }

  ngOnInit(): void {}
  capturedata(data) {
    console.log(data);
    this.service.videoReplaySub.next(data);
  }
  handleSubscription() {
    if (this.subscribeMode2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this.service.videoReplaySub.subscribe((res) =>
        this.user2.push(res)
      );
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }
  handleSubs3() {
    if (this.subscribeMode3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this.service.videoReplaySub.subscribe((res) =>
        this.user3.push(res)
      );
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }
  handleVideoTag() {
    this.displayBox = !this.displayBox;
    const sampleIntObs = interval(1000);
    if (this.displayBox == false) {
      this.subscriptionInt = sampleIntObs
        // .pipe(
        //   tap((res) => {
        //     if (res >= 5) {
        //       this.subscriptionInt.unsubscribe();
        //     }
        //   })
        // )
        .subscribe((res) => {
          this.service.videoReplaySub.next('Video' + res);
        });
    } else {
      this.subscriptionInt.unsubscribe();
    }
  }
}
