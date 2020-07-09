import {Component, ViewChild} from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {HomePage} from "./home/home.page";



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  @ViewChild(HomePage) homePage ;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  getPokemonIdFromList1(number){
    console.log('Parent ID from Menu1:', number);
    this.homePage.pokemonNumber = number;
    this.homePage.pokemon1WasSelected = true;
    this.homePage.checkIfTwoPokemonsSelected();
    console.log('Passou para a home', number);
    this.homePage.resetArrays();
    this.homePage.createLifeArray();
  }

  getPokemonNameFromLIst1(name){
    this.homePage.pokemon1Selected = name;
    console.log('Parent Name from Menu1:', name);
  }

  getPokemonIdFromList2(number){
    console.log('Parent ID from Menu2:', number);
    this.homePage.pokemonNumber2 = number;
    this.homePage.pokemon2WasSelected = true;
    this.homePage.checkIfTwoPokemonsSelected();
    console.log('Passou para a home', number);
    this.homePage.resetArrays();
    this.homePage.createLifeArray();
  }

  getPokemonNameFromLIst2(name){
    this.homePage.pokemon2Selected = name;
    console.log('Parent Name from Menu2:', name);
  }

}
