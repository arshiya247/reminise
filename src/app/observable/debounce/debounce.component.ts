import { AfterViewInit, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
//import { LoadingBarService } from '@ngx-loading-bar/core/loading-bar.service';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';


@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent implements OnInit, AfterViewInit {
  @ViewChild('myExampleRef') myRef: ElementRef;
  @ViewChild('myExampleRef2') myRef2:ElementRef;
  Data = null;
  Data2=null;
  constructor() { }

  ngOnInit(): void { }
  ngAfterViewInit(): void {

    const fromEvObsSeq = fromEvent<any>(this.myRef.nativeElement, 'keyup');
    fromEvObsSeq.pipe(map((val) =>  val.target.value ), debounceTime(1000)).subscribe(res => {
      console.log(res);
       this.Data = res;
      // this.loadingBar.start();

      setTimeout(() => {
        this.Data = null;
       // this.loadingBar.stop();
      }, 1000)
    })
  }

}
