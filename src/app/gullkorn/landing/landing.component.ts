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

        // JSON.stringify
        // this.gullkorn = ["Navnet mitt er helt merkelig.","Lutfattig buttcrakk stjal en cola.","Ikke gi alkoholiserte damer spylev\u00e6ske!","Vi med jentekropp er jenter.","Jetfly over baghdad: drepe drepe.","Pedofile i kristiansand foretrekker mindre\u00e5rige.","Coffeshopens \u00e6rfugl, quark, ordnet liv.","Jeg drakk oppvaskmiddel ved middagsbordet.","Gangbang gundersen var kong harald.","S\u00e6dspruten traff like over barten.","Jentelus gj\u00f8r livet surt, folkens!","Jeg inviterer nok julenissen. nissefest!","Var \u00e5penbart ikke i vater.","Glad damer aldri fiser, alts\u00e5.","Med nyinnkj\u00f8pt endetarm dreit gompedyre.","Svelget gaffelen, fikk nyper\u00f8d diare.","Kona sa jeg trenger sexkurs.","Jeg synes gud er feig.","Narkotika gir faktisk enkelte bivirkninger.","V\u00e5knet av tr\u00f8nderdialekt utenfor huset.","Nakne krille gnidde s\u00e6den sensuelt.","R\u00e5full xylofonist omkom mellom oktavene.","Litt ufint, men liker analsex.","\u00e6sop nynnet p\u00e5 sputniks kanonsang.","Ag3 griseskyter bare notoriske p\u00e5fugler.","Grunnet jentelus gikk kjell bort.","Har ropt kra riktig lenge.","Farfar dyttet kamelen mot h\u00f8yspentgjerdet.","Pappa m\u00f8ter jenter gjennom telefonr\u00f8ret.","Dermed forsvant regjeringsmedlemmet gjennom lufteventilen.","Forskeren overs\u00e5 ragnarokk p\u00e5 ny\u00e5ret.","Denne xylofonen har en tangoplugin.","Uganderen \u00e5ge angret heldigvis ikke.","Neste l\u00f8rdag raner vi eldresenteret.","Runka meg lei. tester homseporno.","En rasende sykes\u00f8ster drepte yngve.","Leker doktor litt med bestefar!","Jeg er flink p\u00e5 lommetennis.","Jan verners pillemix, ikke etterlign!","En full hai angrep ytrefileten.","Fikk rektal clamydia bak essostasjonen.","Neste gang kommer zorro l\u00f8pende!","Ligger naken p\u00e5 naboens balkong.","Plutselig ramlet v\u00e6rdamen til venstre.","Din kone virker ganske bitter.","Balentine gikk ravende rundt juletreet.","Den gamle astronauten nedprioirterte uranusferden.","Ogs\u00e5 jeg har v\u00e6rt kristen.","Litt kaotisk da ledersauen falt.","Er negergutt hans egentlige navn?","Barna dine kalte julenissen k\u00f8dd.","Dere runker sikkert p\u00e5 julestr\u00f8mpene.","Ikke den trusa, renate! t\u00f8s!","Disse feierne jobber jo k\u00f8lsvart!","F\u00e5 av v\u00e5te kl\u00e6r raskt!","Fikk du murmeldyret jeg mailet?","M\u00f8tte kona p\u00e5 notodden biffbar.","Multihandikappede gunnar skulle nyse. feis.","Reka p\u00e5 amfetamin sprellet heseblesende.","Mormors pastellfargede grilldress rocket jostedal.","Friserte noen fjon rundt endetarmen.","Er allah gud? spurte presten.","Utenfor meny ble \u00f8yvind likvidert.","Som vanlig drakk \u00e5ge terpentin.","Orker ikke fise p\u00e5 kontoret.","Det sn\u00f8r tannb\u00f8rster? k\u00f8dder du?","Reveenka og fantomet: nye elskere.","Pr\u00f8ver ut noen utmerkede posisjoner.","Min tante liker best analsex.","Hei sveis! sa \u00e5ges fris\u00f8r.","Dro en zalodose som nesespray.","Ble oppbl\u00e5st etter jannes ertestuing.","Dette er faktisk en elefantfelle!","Ingen var hyggelige p\u00e5 lillehammer.","Har jeg lim over munnen?","Kom til helvete. hilsen bestemor.","Takk, for faen. nok n\u00e5.","Ninjaen i joggedress trenger ninjah\u00e5ndboken!","Vaffelen er t\u00f8rr: knekk, dryss.","Vafler til alle! foreslo pensjonistpartiet.","Gud burde ikke laget norge.","Spis den b\u00e6sjen uten n\u00f8ling!","Puler neppe utlendinger, lukter rart!","Utilgivelig: ingen julenisse kom. labert.","Naboen ba meg dempe onanispetakkelet.","Vasket kremfjes. utrolig mye bakterier.","Deilige sathanas pantet noen damer.","Du blir aldri whoopers \u00e6resgjest!","Oldefar slukte visst en ballong.","Gullfisken fikk nok. vandaliserte kjelleren.","Dra p\u00e5 bar og tr\u00f8stedrikk!","Balentine prompet p\u00e5 peisen. skummelt.","Oppbevarer amfetaminet i to hermetikkbokser.","Gud kom ravende p\u00e5 fyllefest.","Raneren inns\u00e5 nederlaget: dro igjen.","Vi m\u00e5tte pr\u00f8vesmake alle kakene.","Under forh\u00f8ret spiste mordmistenkte menneske\u00f8rer.","Grevlingen jaget gompedyre rundt kirka.","One night hand med balentine!","Kom under sangen av toybox."];
         console.log(this.gullkorn);
  }

  ngOnInit() {
  }

}
