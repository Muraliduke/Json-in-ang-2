import { Component } from '@angular/core';
import {DemojsonService} from './service';


@Component({
  selector: 'my-app',
  templateUrl: `partials/main.html`,
    styleUrls: [`partials/main.css`]
})
export class AppComponent {

  jsontest:any;
  constructor(private jsonService : DemojsonService){

  }
  ngOnInit(){
    this.jsonService.getjso()
        .subscribe(
            jsontest => {this.jsontest = jsontest;
              console.log(jsontest);}

        )

  }

  func(a){
      console.log(a);
  }




}