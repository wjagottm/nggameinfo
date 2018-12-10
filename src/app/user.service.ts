import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import * as moment from 'moment';

const endpoint = 'http://localhost:3000/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  @Output() user: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  register (product): Observable<any> {
    console.log(product);
    return this.http.post<any>(endpoint + 'user/register', JSON.stringify(product), httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError<any>('register'))
    );
  }

  login (email:string, password:string): Observable<any> {
    return this.http.post<any>(endpoint + 'user/authenticate', {email, password}, httpOptions).pipe(
      map(this.setSession.bind(this)),
      catchError(this.handleError<any>('login'))
    );
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('id_token', authResult.data.token);
    localStorage.setItem('username', authResult.data.user.name);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    this.user.emit(null);
  }          

  logout() {
      localStorage.removeItem("id_token");
      localStorage.removeItem("expires_at");
      localStorage.removeItem("username");
      this.user.emit(null);
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration = localStorage.getItem("expires_at");
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
  } 

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
