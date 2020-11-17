import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/includes/apiService';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
})
export class Comp2Component implements OnInit {
  Arsh: String;
  constructor(private Service: ApiService) {
    this.Service.usernameSub.subscribe((res) => (this.Arsh = res));
  }

  ngOnInit(): void {}
  handleUser(user) {
    this.Service.usernameSub.next(user.value);
  }
}
