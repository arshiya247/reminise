import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { concatMap, exhaustMap, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/includes/apiService';

@Component({
  selector: 'app-exhaust-map-demo',
  templateUrl: './exhaust-map-demo.component.html',
  styleUrls: ['./exhaust-map-demo.component.scss'],
})
export class ExhaustMapDemoComponent implements OnInit, AfterViewInit {
  dataCount = 0;
  response;
  fetching: boolean = false;
  @ViewChild('btnVal') btn: ElementRef;
  constructor(private http: HttpClient, private service: ApiService) {}
  url = 'https://global-1bb0f.firebaseio.com/exhaustMap.json';
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement, 'click')
      .pipe(
        tap(() => (this.fetching = true)),
        exhaustMap(() => this.addReq(this.dataCount++))
      )
      .subscribe((res) => {
        this.onFetch();
      });
  }
  addReq(changes) {
    return this.http.put(this.url, { data: changes });
  }
  onFetch() {
    return this.http.get<any>(this.url).subscribe((res) => {
      this.response = res.data;
      console.log(res.data);
    });
  }
}
