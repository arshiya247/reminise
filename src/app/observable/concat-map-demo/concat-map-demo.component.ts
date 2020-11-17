import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, concatMap, delay, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/app/includes/apiService';

@Component({
  selector: 'app-concat-map-demo',
  templateUrl: './concat-map-demo.component.html',
  styleUrls: ['./concat-map-demo.component.scss'],
})
export class ConcatMapDemoComponent implements OnInit {
  constructor(private service: ApiService) {}
  convertData(data) {
    return of('Data Uploaded from : ' + data).pipe(delay(2000));
  }
  ngOnInit(): void {
    const obs = from(['Arsh', 'Avaa', 'Farz']);

    obs.pipe(map((res) => this.convertData(res))).subscribe((res1) => {
      res1.subscribe((res2) => this.service.print(res2, 'mapContainer'));
    });

    obs
      .pipe(
        map((res) => this.convertData(res)),
        concatAll()
      )
      .subscribe((res1) => this.service.print(res1, 'mapConcatAllContainer'));

    obs
      .pipe(concatMap((res) => this.convertData(res)))
      .subscribe((res1) => this.service.print(res1, 'concatMapContainer'));

    obs
      .pipe(mergeMap((res) => this.convertData(res)))
      .subscribe((res1) => this.service.print(res1, 'mergeMapContainer'));
  }
}
