import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/includes/apiService';

@Component({
  selector: 'app-async-subject-demo',
  templateUrl: './async-subject-demo.component.html',
  styleUrls: ['./async-subject-demo.component.scss'],
})
export class AsyncSubjectDemoComponent implements OnInit {
  Value;
  constructor(private service: ApiService) {
    this.service.ayncSub.subscribe((res) => (this.Value = res));
  }

  ngOnInit(): void {}
  capturedata(data) {
    this.service.ayncSub.next(data);
  }
  handleSubscription() {
    this.service.ayncSub.complete();
  }
}
