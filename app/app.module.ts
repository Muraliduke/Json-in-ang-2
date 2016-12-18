import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {DemojsonService} from './service';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule,HttpModule, JsonpModule ],
  declarations: [ AppComponent ],
  providers: [DemojsonService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }