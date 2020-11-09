import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filterdemo',
  templateUrl: './filterdemo.component.html',
  styleUrls: ['./filterdemo.component.scss']
})
export class FilterdemoComponent implements OnInit {
  sam = [
    { id: 1, name: 'nfv', gender: 'Male' },
    { id: 2, name: 'hkfjsn', gender: 'Female' },
    { id: 3, name: 'nfvgh', gender: 'Male' },
     { id: 4, name: 'nfhyv', gender: 'Male' },
    { id: 5, name: 'hjsnsrd', gender: 'Female' },
    { id: 6, name: 'hjsasdfn', gender: 'Female' },
    { id: 7, name: 'hjsnafsg', gender: 'Female' }, 
     { id: 8, name: 'nfwerv', gender: 'Male' }, 
    { id: 9, name: 'nfvsdf', gender: 'Male' }, 
    { id: 10, name: 'nfvsd', gender: 'Male' },
  ];
data;
dataGender;
dataNthItem;
  constructor() { }

  ngOnInit(): void {
  
  const filterIns=from(this.sam);

  filterIns.pipe( filter(member => member.name.length>6)  , toArray()).subscribe(res=>{this.data=res});
  
  const filterGender=from(this.sam);
  filterGender.pipe(  filter(m=>m.gender==='Male') ,toArray()).subscribe(res=> this.dataGender=res)
  
  const filterByNthItem=from(this.sam);
  filterByNthItem.pipe(filter(m=> m.id===5) ,toArray()).subscribe(res=> this.dataNthItem=res)
  }

}
