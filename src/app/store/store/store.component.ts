import { Component, Output } from '@angular/core';
import { GreenGrocersServiceService } from 'src/app/green-grocers-service.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  constructor(
    public readonly greenGrocersService: GreenGrocersServiceService
  ) {}

  grocers = this.greenGrocersService.items;

  addToCart(grocers: Item) {
    this.greenGrocersService.inspectCartAndAddItem(grocers);
  }
}
