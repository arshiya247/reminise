import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {

  constructor() { }

  @ViewChild('addBtn') addBtn:any;

  ngOnInit(): void {

  }
  ngAfterViewInIt() {
    let count = 1;
    fromEvent(this.addBtn._elementRef.nativeElement, 'click').
       subscribe(res => { console.log('Video') });
  }
  print() {
    let el = document.createElement('li');
    el.innerText = 'Video1';
    document.getElementById('elContainer').appendChild(el);
  }
}
