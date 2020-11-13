import { Component, OnInit } from '@angular/core';
import { ApiService } from '../includes/apiService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navOpen: boolean = false;
  exclusiveProp: boolean = false;
  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.service.exclusiveSub.subscribe((res) => (this.exclusiveProp = res));
  }

  onNavToggle() {
    this.navOpen = !this.navOpen;
  }
}
