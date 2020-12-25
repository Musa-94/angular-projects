import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private _http: Http) { }

  public getQuestionsServer(): any {
    return this._http.get('https://gamegifty.herokuapp.com/getQuestions').pipe(
      map((res: any) => {
        console.log('res', res.json());
        return res.json();
      },
      (err: any) => {
        this.handleError(err);
      }
      )
    );
  }

  handleError(err: any): any {
    console.error(err);
    return Observable.throw(err || 'Error 500');
  }
}
