import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from './Search.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  url = 'https://my-json-server.typicode.com/Uxtrendz/apis/videoList';
  constructor(private http: HttpClient) {}
  getSearchData(data): Observable<Search> {
    return this.http.get<Search>(this.url + '?q=' + data);
  }
}
