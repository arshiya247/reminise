import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  concatMap,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  pluck,
  switchMap,
} from 'rxjs/operators';
import { ApiService } from 'src/app/includes/apiService';
import { Search } from 'src/app/includes/Search.interface';
import { SearchService } from 'src/app/includes/searchService';

@Component({
  selector: 'app-search-mini-proj',
  templateUrl: './search-mini-proj.component.html',
  styleUrls: ['./search-mini-proj.component.scss'],
})
export class SearchMiniProjComponent implements AfterViewInit {
  @ViewChild('searchForm') searchForm: NgForm;
  response: Search;
  responseCount;
  constructor(private service: SearchService) {}

  ngAfterViewInit() {
    const captureFormdataObs = this.searchForm.valueChanges;
    captureFormdataObs
      .pipe(
        filter(() => this.searchForm.valid),
        pluck('searchTerm'),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((res1) => this.service.getSearchData(res1))
      )
      .subscribe((res) => {
        this.response = res;
        this.responseCount = Object.keys(res).length;
        console.log(res);
      });
  }
}
