import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ErrorService {
  constructor() {}

  handleError(err: HttpErrorResponse) {
    let errorData = '';
    if (err.error || err.error.error) {
      errorData = 'Network Issue';
    } else if (err.error.error == 'Permission Denied') {
      errorData = 'You cannot access due to access issues';
    } else {
      errorData = err.error.error;
    }
    return throwError(errorData);
  }
}
