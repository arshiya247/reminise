import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/app/includes/apiService';

@Component({
  selector: 'app-merge-demo',
  templateUrl: './merge-demo.component.html',
  styleUrls: ['./merge-demo.component.scss'],
})
export class MergeDemoComponent implements OnInit {
  constructor(private service: ApiService) {}
  getObsReturn(data) {
    return of('Video Uploaded ' + data);
  }
  ngOnInit(): void {
    const obs1 = from(['tech', 'news', 'comedy']);
    obs1
      .pipe(map((res) => this.getObsReturn(res)))
      .subscribe((res) =>
        res.subscribe((res) => this.service.print(res, 'mapContainer'))
      );

    obs1
      .pipe(
        map((res) => this.getObsReturn(res)),
        mergeAll()
      )
      .subscribe((res) => this.service.print(res, 'mapMergeAllContainer'));

    obs1
      .pipe(mergeMap((res) => this.getObsReturn(res)))
      .subscribe((res) => this.service.print(res, 'mergeMapContainer'));
  }
}
