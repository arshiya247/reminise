import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, toArray, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-pluckdemo',
  templateUrl: './pluckdemo.component.html',
  styleUrls: ['./pluckdemo.component.scss']
})
export class PluckdemoComponent implements OnInit {
  sampleAr=[{name:'Arshia',skill:'Cooking', job: {
    title: 'ndfn',
    experience:'hjdm'
  }},
  {name:'farz',skill:'eating',job: {
    title: 'ndf23n',
    experience:'h45jdm'
  }},
  {name:'avaa',skill:'sleeping',job: {
    title: 'ndf367n',
    experience:'hj234dm'
  }},
  {name:'aliaa',skill:'movies',job: {
    title: 'ndf235n',
    experience:'hj465dm'
  }}]
  msgRes;
  msgRes1;
  constructor() { }

  ngOnInit(): void {
    from(this.sampleAr).pipe(pluck('name'), toArray()).subscribe(res=>this.msgRes=res);
    from(this.sampleAr).pipe(pluck('job','title'),toArray()).subscribe(res=>this.msgRes1=res);
  }

}
