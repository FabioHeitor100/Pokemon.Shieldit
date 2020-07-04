import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {GenIService} from "./Pokemons/gen-i.service";
import {HomePage} from "./home/home.page";
import {HomePageModule} from "./home/home.module";
import {TesteComponent} from "./teste/teste/teste.component";
import {MoveDataClass} from "./MoveDATA/move-data-class";
import {MoveEff} from "./MoveDATA/move-eff";
import {PokemonMenu1Component} from "./pokemon-menu1/pokemon-menu1.component";
import {PokemonMenu2Component} from "./pokemon-menu2/pokemon-menu2.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent,TesteComponent,PokemonMenu1Component,PokemonMenu2Component],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HomePageModule, BrowserAnimationsModule],
  providers: [
    StatusBar,
    SplashScreen,
      GenIService,
      MoveDataClass,
       MoveEff,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
