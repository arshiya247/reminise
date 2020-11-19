import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, map, mergeMap, switchAll, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/includes/apiService';

@Component({
  selector: 'app-switch-map-demo',
  templateUrl: './switch-map-demo.component.html',
  styleUrls: ['./switch-map-demo.component.scss'],
})
export class SwitchMapDemoComponent implements OnInit {
  constructor(private service: ApiService) {}
  getObsIns(data) {
    return of('Data Uploaded' + data);
  }
  ngOnInit(): void {
    const obs = from(['ars', 'hiy', 'avaa ']);

    obs
      .pipe(map((res) => this.getObsIns(res)))
      .subscribe((res1) =>
        res1.subscribe((res2) => this.service.print(res2, 'mapContainer'))
      );

    obs
      .pipe(
        map((res) => this.getObsIns(res)),
        switchAll()
      )
      .subscribe((res1) => this.service.print(res1, 'mapSwitchAllContainer'));

    obs
      .pipe(switchMap((res) => this.getObsIns(res)))
      .subscribe((res1) => this.service.print(res1, 'switchMapContainer'));

    obs
      .pipe(mergeMap((res) => this.getObsIns(res)))
      .subscribe((res1) => this.service.print(res1, 'mergeMapContainer'));

    obs
      .pipe(concatMap((res) => this.getObsIns(res)))
      .subscribe((res1) => this.service.print(res1, 'concatMapContainer'));
  }
}
