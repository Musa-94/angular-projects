import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private _http: Http) { }

  public getCustomers() {
    return this._http.get('https://www.w3schools.com/angular/customers.php').pipe(
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
