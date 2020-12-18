import { Component, OnInit } from '@angular/core';
import { HelloServiceService } from '../../services/hello-service.service';
import { CustomerServiceService } from '../../services/customer-service.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-multiple-services',
  templateUrl: './multiple-services.component.html',
  styleUrls: ['./multiple-services.component.less']
})
export class MultipleServicesComponent implements OnInit {

  private helloResponse: any;
  private customerResponse: any;
  constructor(private _helloService: HelloServiceService, private _customerService: CustomerServiceService) { }

  ngOnInit(): void {
    forkJoin([
      this._helloService.helloService(),
      this._customerService.getCustomers()
    ])
    .subscribe(respose => {
      this.helloResponse = respose[0];
      this.customerResponse = respose[1];
    });

    // this._helloService.helloService().subscribe(res => this.helloResponse = res);
    // this._customerService.getCustomers().subscribe(res => this.customerResponse = res);
  }


  public getHelloResponse(): any {
    return this.helloResponse;
  }

  public getCustomerResponse(): any {
    return this.customerResponse;
  }

}
