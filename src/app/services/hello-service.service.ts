import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HelloServiceService {

  constructor(private _http: Http) { }

  public helloService() {
    return this._http.get('http://test-routes.herokuapp.com/test/hello').pipe(
      map(res => {
        return res.json();
      },
      (err: any) => {
        this.handleError(err);
      })
    );
  }

  public handleError(err: any) {
    return Observable.throw(err || 'Error 500');
  }
}
