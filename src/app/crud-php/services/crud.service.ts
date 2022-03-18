import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Products } from '../model/products';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  // base api url
  public url = 'http://localhost/ng_crud/';
  constructor(private http: HttpClient) {}

  // all errors
  private handleError( error: HttpErrorResponse): any{

    if(error.error instanceof ErrorEvent){
      console.error('Xatolik :', error.error.message );
    } else{
      console.error(`Xatolik mavjud: ${error.status}, ` + 
      `xatosi: ${error.error}`);
    }
    return throwError('Something bad happened; please try again leter.');
  }

  // extract data
  private extractData(res: Response): any{
    const body = res;
    return body || { };
  }

  // get all poduct
  getProducts(): Observable<any>{
    return this.http.get<Products []>( this.url + 'view.php').pipe(
      // catchError(this.handleError)
    );
  }

  // get one poduct by id
  getFind(id: number): Observable<any>{
    return this.http.get<Products>( this.url + 'view_one.php?id=' + id).pipe(
      // catchError(this.handleError)
    );
  }

  // create product
  addProducts(data: any): Observable<any>{
    return this.http.post<Products>( this.url + 'create.php', data).pipe(
      // catchError(this.handleError)
    );
  }

  // update product
  updateProduct(data: Products): Observable<any>{
    return this.http.post<Products>( this.url + 'update.php', data).pipe(
      catchError(this.handleError)
    );
  }

  // delete product
  deleteProduct(id: number): Observable<any>{
    return this.http.get<Products>( this.url + 'delete.php?id=' + id).pipe(
      // catchError(this.handleError)
    );
  }





}
