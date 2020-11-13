import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, retry, retryWhen, scan } from 'rxjs/operators';


@Component({
  selector: 'app-retry-demo',
  templateUrl: './retry-demo.component.html',
  styleUrls: ['./retry-demo.component.scss'],
})
export class RetryDemoComponent implements OnInit {
  constructor(private http: HttpClient) { }
  sampleD;
  status = 'falseNow';
  ngOnInit(): void { };
  fetchUser() {
    this.http
      .get('https://global-1bb0f.firebaseio.com/user.json').pipe(
        retryWhen(err => err.pipe(delay(2000), scan((retryCount) => {
          if (retryCount >= 5) {
            throw err;
          } else {
            retryCount = retryCount + 1;
          
            console.log('retry count is '+retryCount);
            return retryCount;
          }
        }
        ))
        ))
      .subscribe((res) => { (this.sampleD = res); this.status = 'trueNow' });
  }
}
