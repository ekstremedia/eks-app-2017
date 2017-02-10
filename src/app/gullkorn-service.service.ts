import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class GullkornServiceService { 
  constructor(private http:Http) {
  }

  getGullkorn() {
    return this.http.request('./test')
                 .map(res => res.json());
  }
}