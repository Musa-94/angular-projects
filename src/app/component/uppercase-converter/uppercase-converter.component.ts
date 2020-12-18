import { Component, OnInit } from '@angular/core';
import { UppercaseConverterService } from '../../service/uppercase-converter.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-uppercase-converter',
  templateUrl: './uppercase-converter.component.html',
  styleUrls: ['./uppercase-converter.component.less']
})
export class UppercaseConverterComponent implements OnInit {
  private message: any;
  constructor(private _service: UppercaseConverterService) { }

  ngOnInit(): void {
  }

  public convert(obj: any): any {
    this._service.convertToUppercase(obj).subscribe(
      (res: any) =>  this.message = res,
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  public getMessage(): any {
    return this.message;
  }

}
