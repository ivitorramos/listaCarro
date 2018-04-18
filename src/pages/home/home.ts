import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carros;

  constructor(public navCtrl: NavController) {
      this.carros=[
        {nome:"Corsa", preco:7500},
        {nome:"Siena", preco:12500},
        {nome:"Palio", preco:9000},
        {nome:"Fusca Blue", preco:17500},
        {nome:"Kombi", preco:6500}
      ];
  }

}
