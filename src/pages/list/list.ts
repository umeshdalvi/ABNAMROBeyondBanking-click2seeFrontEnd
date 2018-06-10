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
  items: Array<{note: string, price: string, icon: string, imagePath: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];
    let films : any;
    films = navParams.get('item');
  /*  films=
      {"productList": [
      {
        "id": 10061036,
        "name": "ASOS DESIGN skinny floral printed shirt",
        "price": 38.71,
        "description": "\nBrand: ASOS\nColour:White\nType:Product",
        "offers": null,
        "loanOffers": null,
        "imagePath": "https://images.asos-media.com/products/asos-design-skinny-floral-printed-shirt/10061036-1-white",
        "loanAvailable": false
      },
      {
        "id": 10114375,
        "name": "New Look Oxford Shirt In Regular Fit In Lilac",
        "price": 24.87,
        "description": "\nBrand: New Look\nColour:Lilac\nType:Product",
        "offers": null,
        "loanOffers": null,
        "imagePath": "https://images.asos-media.com/products/new-look-oxford-shirt-in-regular-fit-in-lilac/10114375-1-lilac",
        "loanAvailable": false
      },
      {
        "id": 10117245,
        "name": "Selected Homme Long Sleeve Shirt",
        "price": 38.71,
        "description": "\nBrand: Selected Homme\nColour:Brown\nType:Product",
        "offers": null,
        "loanOffers": null,
        "imagePath": "https://images.asos-media.com/products/selected-homme-long-sleeve-shirt/10117245-1-brown",
        "loanAvailable": false
      },
      {
        "id": 10158213,
        "name": "Only & Sons Slim Fit Pique Shirt",
        "price": 38.71,
        "description": "\nBrand: Only & Sons\nColour:White\nType:Product",
        "offers": null,
        "loanOffers": null,
        "imagePath": "https://images.asos-media.com/products/only-sons-slim-fit-pique-shirt/10158213-1-white",
        "loanAvailable": false
      },
      {
        "id": 10158221,
        "name": "Only & Sons Slim Fit Pique Shirt",
        "price": 38.71,
        "description": "\nBrand: Only & Sons\nColour:Navy\nType:Product",
        "offers": null,
        "loanOffers": null,
        "imagePath": "https://images.asos-media.com/products/only-sons-slim-fit-pique-shirt/10158221-1-navy",
        "loanAvailable": false
      },
      {
        "id": 10186910,
        "name": "Roadies of 66 Chinoiserie Print Revere Collar Co-ord Shirt",
        "price": 34.56,
        "description": "\nBrand: Roadies\nColour:Black\nType:Product",
        "offers": null,
        "loanOffers": null,
        "imagePath": "https://images.asos-media.com/products/roadies-of-66-chinoiserie-print-revere-collar-co-ord-shirt/10186910-1-black",
        "loanAvailable": false
      },
      {
        "id": 10187171,
        "name": "Roadies of 66 Paisley Print Revere Collar Co-ord Shirt",
        "price": 34.56,
        "description": "\nBrand: Roadies\nColour:Navy\nType:Product",
        "offers": null,
        "loanOffers": null,
        "imagePath": "https://images.asos-media.com/products/roadies-of-66-paisley-print-revere-collar-co-ord-shirt/10187171-1-navy",
        "loanAvailable": false
      },
      {
        "id": 10299214,
        "name": "Only & Sons Short Sleeve Printed Shirt With Revere Collar",
        "price": 35.95,
        "description": "\nBrand: Only & Sons\nColour:White red flower\nType:Product",
        "offers": null,
        "loanOffers": null,
        "imagePath": "https://images.asos-media.com/products/only-sons-short-sleeve-printed-shirt-with-revere-collar/10299214-1-whiteredflower",
        "loanAvailable": false
      },
      {
        "id": 9146195,
        "name": "Walter Baker Mixed Stripe Shirt",
        "price": 69.13,
        "description": "\nBrand: Walter Baker\nColour:Blue\nType:Product",
        "offers": null,
        "loanOffers": null,
        "imagePath": "https://images.asos-media.com/products/walter-baker-mixed-stripe-shirt/9146195-1-blue",
        "loanAvailable": false
      },
      {
        "id": 9176278,
        "name": "ASOS DESIGN slim fit linen mix shirt with grandad collar in navy",
        "price": 27.65,
        "description": "\nBrand: ASOS\nColour:Navy\nType:Product",
        "offers": null,
        "loanOffers": null,
        "imagePath": "https://images.asos-media.com/products/asos-design-slim-fit-linen-mix-shirt-with-grandad-collar-in-navy/9176278-1-navy",
        "loanAvailable": false
      }
    ]
  };*/

        this.items = [];
        for(let i = 1; i < films.productList.length; i++) {
          this.items.push({
            note: films.productList[i].name,
            price: films.productList[i].price,
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
