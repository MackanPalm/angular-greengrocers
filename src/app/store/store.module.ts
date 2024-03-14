import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [StoreComponent, CartComponent, TotalCostComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [StoreComponent, CartComponent, TotalCostComponent],
})
export class StoreModule {}
