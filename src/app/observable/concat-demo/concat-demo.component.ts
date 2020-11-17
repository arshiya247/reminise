import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { concat } from 'rxjs/internal/observable/concat';
import { merge } from 'rxjs/internal/observable/merge';
import { concatAll, map, take } from 'rxjs/operators';
import { ApiService } from 'src/app/includes/apiService';

@Component({
  selector: 'app-concat-demo',
  templateUrl: './concat-demo.component.html',
  styleUrls: ['./concat-demo.component.scss'],
})
export class ConcatDemoComponent implements OnInit {
  displayConcat: boolean = false;
  displayMerge: boolean = false;
  constructor(private service: ApiService) {}
  ngOnInit(): void {
    const techObs = interval(1000).pipe(
      map((res) => 'Tech Video' + res),
      take(5)
    );
    const comedyObs = interval(1000).pipe(
      map((res) => 'comedy Video ' + res),
      take(3)
    );
    const newsObs = interval(1000).pipe(
      map((res) => 'news Video' + res),
      take(4)
    );
    const finalObsConcat = concat(techObs, comedyObs, newsObs);
    const finalObsMerge = merge(techObs, comedyObs, newsObs);

    finalObsConcat.subscribe((res) => this.service.print(res, 'channelConcat'));
    finalObsMerge.subscribe((res) => this.service.print(res, 'channelMerge'));
  }
  handleMerge() {
    this.displayMerge = !this.displayMerge;
  }
  handleConcat() {
    this.displayConcat = !this.displayConcat;
  }
}
