import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import {
  catchError,
  filter,
  map,
  mergeMap,
  pluck,
  shareReplay,
  take,
  toArray,
} from 'rxjs/operators';
import { Data } from 'src/app/includes/data';
import { ErrorService } from 'src/app/includes/error.service';

@Component({
  selector: 'app-share-replay-demo',
  templateUrl: './share-replay-demo.component.html',
  styleUrls: ['./share-replay-demo.component.scss'],
})
export class ShareReplayDemoComponent implements OnInit {
  product: Observable<any>;
  products: Observable<any>;
  errorData;
  url = 'https://jsonplaceholder.typicode.com/photos';
  url1 = 'https://test-products-b05fe.firebaseio.com';
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  ngOnInit(): void {
    this.product = this.http
      .get(this.url1)
      .pipe(shareReplay(), catchError(this.errorService.handleError));
    this.product.subscribe(
      (res) => {
        this.products = res;
      },
      (err) => {
        this.errorData = err;
      }
    );

    // this.products = this.product.pipe(
    //   map((res) =>
    //     res.filter((res1) => {
    //       return res1['id'] < 10;
    //     })
    //   )
    // );
  }
}
