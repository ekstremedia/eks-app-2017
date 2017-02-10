import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';



@Injectable()
export class GullkornServiceService { 
  constructor(private http:Http) {
  }

  getGullkorn() {
    return this.http.get('./gk/gullkorn.json')
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())

                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  	// var getit = this.http.request()
   //               .map(res => res.json());
   //  return getit;
  }
}