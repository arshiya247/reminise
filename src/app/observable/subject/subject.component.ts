import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from 'src/app/includes/apiService';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit, OnDestroy {
  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.service.exclusiveSub.next(true);
  }

  ngOnDestroy() {
    this.service.exclusiveSub.next(false);
  }
}
