import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

interface MyObj {
    myString: string;
    myNumber: number;
}


@Component({
  selector: 'app-common-names-page',
  templateUrl: './common-names-page.component.html',
  styleUrls: ['./common-names-page.component.css']
})
export class CommonNamesPageComponent implements OnInit {
  public name;
  constructor(private http: Http) {
    this.getJSON().subscribe(
      data => {
       //data contains the json.
       console.log(data[1997][2][0]);
      }, 
      error => console.log(error)
    );

    //let obj: MyObj = JSON.parse(json);
    // this.name = obj["0"][0]
   }

  ngOnInit() {

  }

  public getJSON(): Observable<any> {
     let json = '../../../top_names.json'
         return this.http.get(json)
                         .map((res:any) => res.json());

     }



}
