import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { combineLatest, forkJoin, fromEvent } from 'rxjs';
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';
import { map, take, withLatestFrom, zip, zipAll } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest-demo',
  templateUrl: './combine-latest-demo.component.html',
  styleUrls: ['./combine-latest-demo.component.scss'],
})
export class CombineLatestDemoComponent implements AfterViewInit {
  colors = [
    'bg-primary',
    'bg-secondary',
    'bg-success',
    'bg-danger',
    'bg-warning',
    'bg-info',
  ];
  names = ['arsh', 'avaa', 'farz', 'een', 'iyaa'];
  @ViewChild('name') name: ElementRef;
  @ViewChild('color') color: ElementRef;

  @ViewChild('nameZip') nameZip: ElementRef;
  @ViewChild('colorZip') colorZip: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(
      map((res) => res.target.value)
    );
    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      map((res) => res.target.value)
    );
    // combineLatest(nameObs, colorObs).subscribe(([name, color]) =>
    //   this.makeDiv(name, color, 'combineLatest')
    // );

    nameObs
      .pipe(withLatestFrom(colorObs))
      .subscribe(([name, color]) => this.makeDiv(name, color, 'combineLatest'));

    const nameZipObs = fromEvent<any>(
      this.nameZip.nativeElement,
      'change'
    ).pipe(
      map((res) => res.target.value),
      take(4)
    );

    const colorZipObs = fromEvent<any>(
      this.colorZip.nativeElement,
      'change'
    ).pipe(
      map((res) => res.target.value),
      take(3)
    );

    // zip(nameZipObs, colorZipObs).subscribe(([name, color]) =>
    //   this.makeDiv(name, color, 'zipElement')
    // );

    forkJoin(nameZipObs, colorZipObs).subscribe(([name, color]) =>
      this.makeDiv(name, color, 'forkElement')
    );
  }

  makeDiv(name, color, elementId) {
    let el = document.createElement('li');

    el.innerText = name;
    el.setAttribute('class', color);
    var n = document.getElementById(elementId);
    n.appendChild(el);
  }
}
