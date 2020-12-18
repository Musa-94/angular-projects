import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultipleServicesComponent } from './components/multiple-services/multiple-services.component';
import { CustomerServiceService } from './services/customer-service.service';
import { HelloServiceService } from './services/hello-service.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    MultipleServicesComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HelloServiceService,
    CustomerServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
