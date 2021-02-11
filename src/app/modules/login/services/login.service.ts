import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpService } from 'src/app/common/services/http.service';
import { Login } from '../classes/login';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public constructor(private httpSevice: HttpService, private http: HttpClient) { }

  public login(data: Login): Observable<string> {
    return this.http.post<string>(`${this.httpSevice.url}/api/v1/users/login`, data)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      return throwError(`An error occurred: ${error.error.message}`);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      return throwError(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
  }
}
