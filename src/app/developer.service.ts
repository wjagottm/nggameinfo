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

export class DeveloperService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getDevelopers(): Observable<any> {
    return this.http.get(endpoint + 'developers').pipe(
      map(this.extractData));
  }

  getDeveloper(id): Observable<any> {
    return this.http.get(endpoint + 'developer/' + id).pipe(
      map(this.extractData));
  }

  addDeveloper (product): Observable<any> {
    console.log(product);
    return this.http.post<any>(endpoint + 'developer', JSON.stringify(product), httpOptions).pipe(
      tap((product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }

  addGameToDev ( id, product): Observable<any> {
    return this.http.post<any>(endpoint + 'developer/game/' + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log('added game to developer w/ id=' + product.id)),
      catchError(this.handleError<any>('addGameToDev'))
    )
  }

  updateDeveloper (id, product): Observable<any> {
    return this.http.put(endpoint + 'developer/' + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteDeveloper (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'developer/' + id, httpOptions).pipe(
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


