import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UppercaseConverterService {

  constructor(private _http: Http) { }

  public convertToUppercase(obj: any): any {
    return this._http.post('http://test-routes.herokuapp.com/test/uppercase', obj).pipe(
      map(res => {
        return res.json();
      },
      (err: any) => {
        this.handleError(err);
      }
    ));
  }

  handleError(err: any): any {
    console.error(err);
    return Observable.throw(err || 'Error 500');
  }
}
