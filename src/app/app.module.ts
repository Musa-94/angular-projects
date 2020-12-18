import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { UppercaseConverterComponent } from './component/uppercase-converter/uppercase-converter.component';
import { UppercaseConverterService } from './service/uppercase-converter.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UppercaseConverterComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [UppercaseConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
