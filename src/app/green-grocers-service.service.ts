import { Injectable } from '@angular/core';
import { Item } from './models/item';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CartItem } from './models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class GreenGrocersServiceService {
  items: Item[] = [];

  cartContents: CartItem[] = [];

  totalCost: string = '';

  filterValue: string = 'all';

  constructor(private readonly http: HttpClient) {
    this.loadItems(this.filterValue);
    this.loadTotalCost();
  }

  async loadItems(filterValue: string) {
    let toAdd = '';
    switch (filterValue) {
      case 'all':
        break;
      case 'vegetables':
        toAdd = '?type=vegetable';
        break;
      case 'fruits':
        toAdd = '?type=fruit';
        break;
      default:
        break;
    }

    this.items = await firstValueFrom(
      this.http.get<Item[]>(`${environment.apiUrl}groceries${toAdd}`)
    );
  }

  inspectCartAndAddItem(grocers: Item) {
    //add stuff to inspect basket later
    if (this.cartContents.find((i) => i.Item.id === grocers.id)) {
      //this.cartContents.includes(grocers)
      // increase quantity by one

      let tempCartItem = this.cartContents.find(
        (i) => i.Item.id === grocers.id
      );
      if (tempCartItem) {
        tempCartItem.quantity += 1;
      }
    } else {
      let cartItem: CartItem = { Item: grocers, quantity: 1 };

      this.cartContents.push(cartItem);
    }

    this.loadTotalCost();
  }

  addToQuantity(cartItem: CartItem) {
    if (this.cartContents.includes(cartItem)) {
      cartItem.quantity += 1;
    }
    this.loadTotalCost();
  }

  removeFromQuantity(cartItem: CartItem) {
    if (this.cartContents.includes(cartItem)) {
      if (cartItem.quantity === 1) {
        const index = this.cartContents.indexOf(cartItem);
        this.cartContents.splice(index, 1);
      } else {
        cartItem.quantity -= 1;
      }
    }
    this.loadTotalCost();
  }

  loadTotalCost() {
    let tempCost: number = 0;
    this.cartContents.map((cartItem) => {
      tempCost = tempCost + cartItem.Item.price * cartItem.quantity;
    });
    this.totalCost = tempCost.toFixed(2);
    console.log('totalCost', this.totalCost);
  }

  async setFilterValue(value: string) {
    this.filterValue = value;

    await this.loadItems(this.filterValue);
  }
}
