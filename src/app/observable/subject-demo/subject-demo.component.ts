//import {  } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/includes/apiService';

@Component({
  selector: 'app-subject-demo',
  templateUrl: './subject-demo.component.html',
  styleUrls: ['./subject-demo.component.scss'],
})
export class SubjectDemoComponent implements OnInit, OnDestroy {
  username: String;
  constructor(private service: ApiService) {
    this.service.usernameSub.subscribe((res) => {
      this.username = res;
    });
  }

  ngOnInit(): void {
    this.service.exclusiveSub.next(true);
  }

  ngOnDestroy() {
    this.service.exclusiveSub.next(false);
  }
}
