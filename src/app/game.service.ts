import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:3000/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class GameService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getGames(): Observable<any> {
    return this.http.get(endpoint + 'games').pipe(
      map(this.extractData));
  }

  getGame(id): Observable<any> {
    return this.http.get(endpoint + 'game/' + id).pipe(
      map(this.extractData));
  }

  getGameByDev(id): Observable<any> {
    return this.http.get(endpoint + 'game/developer/' + id).pipe(
      map(this.extractData));
  }

  addGame (product): Observable<any> {
    console.log(product);
    return this.http.post<any>(endpoint + 'game', JSON.stringify(product), httpOptions).pipe(
      tap((product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }

  updateGame (id, product): Observable<any> {
    return this.http.put(endpoint + 'game/' + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteGame (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'game/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
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


