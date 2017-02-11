import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class GullkornService { 
  result: any;

  constructor(private http:Http) {
  }

  getGullkorn()  {

  let result = this.result;
    this.http.get('./gk/gullkorn.json')
    .map(res => res.json())
    .subscribe(
            val => this.result = val,
            err => console.error(err),
            () =>  console.log(this.result));  // this one echoes out what i want
            console.log(this.result); // but this one doesnt, so i cant return it 
  }

}