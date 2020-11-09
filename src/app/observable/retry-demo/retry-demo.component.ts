import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-retry-demo',
  templateUrl: './retry-demo.component.html',
  styleUrls: ['./retry-demo.component.scss'],
})
export class RetryDemoComponent implements OnInit {
  constructor(private http: HttpClient) {}
  sampleD;
  ngOnInit(): void {}
  fetchUser() {
    this.http
      .get('https://global-1bb0f.firebaseio.com/user.json')
      .subscribe((res) => (this.sampleD = res));
  }
}
