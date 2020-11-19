import { Component, Injectable } from '@angular/core';
import { AsyncSubject, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  exclusiveSub = new Subject<boolean>();
  usernameSub = new BehaviorSubject<String>('Arsh');
  videoReplaySub = new ReplaySubject<string>(3, 5000);
  ayncSub = new AsyncSubject();
  constructor() {}

  print(val, containerId) {
    let el = document.createElement('li');
    el.innerText = val;

    document.getElementById(containerId).appendChild(el);
  }
}
