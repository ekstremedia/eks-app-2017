    import { Component, OnInit } from '@angular/core';
    import {Router, RouterOutlet} from '@angular/router';
    import { HttpModule, JsonpModule } from '@angular/http';
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule }      from '@angular/core';
    import { GullkornService } from '../../gullkorn-service.service';
    import { FormsModule }   from '@angular/forms';
    import {Observable} from 'rxjs/Observable';

    import "gsap";
    declare var ease, TimelineMax,TweenMax,Power4,Power1,Power2,Power3,Bounce, Elastic:any;

    @Component({
      selector: 'gullkorn-visning',
      providers: [GullkornService],
      templateUrl: './landing.component.html',
      styleUrls: ['./landing.component.css']
    })
    export class LandingComponent implements OnInit {
      gullkorn: any;
      GullkornService: any;

      constructor(GullkornService: GullkornService) { 
      this.GullkornService = GullkornService;
            // this.gullkorn = GullkornService.getGullkorn();
            // console.log(this.gullkorn);
     GullkornService.getGullkorn()
        .subscribe(data => {
           this.gullkorn = data
      });            
      }

      ngOnInit() {
        this.doAnim();
      }
      doAnim() {
         // let tl = new TimelineMax();
        let eks = document.getElementById("h1");
      // tl.play();
      TweenMax.fromTo(eks, 1, 
        { autoAlpha:0,  ease: Power2.easeIn },
        { autoAlpha:1});        
      }
    updateGk(GullkornService) {
     this.GullkornService.getGullkorn()
        .subscribe(data => {
           this.gullkorn = data
      });
              // this.doAnim();
   
    }
    }
