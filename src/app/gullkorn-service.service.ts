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

  // let result = this.result;
    return this.http.get('/eks-app-2017/test')
     // return this.http.get('./gk/gullkorn.json')
    .map(res => res.json());
 // but this one doesnt, so i cant return it 
  }

}