import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string, imagePath: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];
    let films : any;
    films = navParams.get('item');

        this.items = [];
        for(let i = 1; i < films.productList.length; i++) {
          this.items.push({
            title: films.productList[i].id,
            note: films.productList[i].name,
            imagePath: films.productList[i].imagePath,
            icon: this.icons[Math.floor(Math.random() * this.icons.length)]
          });
        }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
