import { Component, OnInit } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { GullkornServiceService } from '../../gullkorn-service.service';
import { FormsModule }   from '@angular/forms';
import "gsap";
declare var ease, TimelineMax,TweenMax,Power4,Power1,Power2,Power3,Bounce, Elastic:any;

@Component({
  selector: 'gullkorn-visning',
  providers: [GullkornServiceService],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
gullkorn: any;
  constructor(GullkornServiceService: GullkornServiceService) { 
        this.gullkorn = GullkornServiceService.getGullkorn();
        console.log(this.gullkorn)
  }

  ngOnInit() {
  }

}
