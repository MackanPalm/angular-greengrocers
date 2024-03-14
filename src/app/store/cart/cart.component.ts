import { Component } from '@angular/core';
import { GreenGrocersServiceService } from 'src/app/green-grocers-service.service';
import { CartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(
    public readonly greenGrocersService: GreenGrocersServiceService
  ) {}

  cartContents = this.greenGrocersService.cartContents;

  addToQuantity(cartItem: CartItem) {
    this.greenGrocersService.addToQuantity(cartItem);
  }

  removeFromQuantity(cartItem: CartItem) {
    this.greenGrocersService.removeFromQuantity(cartItem);
  }
}
