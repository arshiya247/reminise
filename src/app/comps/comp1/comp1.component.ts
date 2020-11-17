import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/includes/apiService';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component implements OnInit {
  user: String;
  constructor(private service: ApiService) {
    this.service.usernameSub.subscribe((res) => (this.user = res));
  }

  ngOnInit(): void {}
  captureTypedValue(username) {
    this.service.usernameSub.next(username.value);
  }
}
