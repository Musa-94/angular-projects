import { Component, OnInit } from '@angular/core';
import { ProductDataService } from './service/product-data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  private questions: any;
  constructor(private _service: ProductDataService) { }

  ngOnInit(): any {
    this._service.getQuestionsServer().subscribe(
      (res: any) => this.questions = res,
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  getQuestions(): any {
    return this.questions;
  }
}
