import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/includes/apiService';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss'],
})
export class Comp3Component implements OnInit {
  Arsh: String;
  constructor(private service: ApiService) {
    this.service.usernameSub.subscribe((res) => (this.Arsh = res));
  }

  ngOnInit(): void {}
  handleArsh(user) {
    this.service.usernameSub.next(user.value);
  }
}
