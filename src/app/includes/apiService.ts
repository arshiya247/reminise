import { Component, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  exclusiveSub = new Subject<boolean>();
  constructor() {}

  print(val, containerId) {
    let el = document.createElement('li');
    el.innerText = val;

    document.getElementById(containerId).appendChild(el);
  }
}
