import { Component } from '@angular/core';
import { GreenGrocersServiceService } from 'src/app/green-grocers-service.service';

@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.css'],
})
export class TotalCostComponent {
  constructor(
    public readonly greenGrocersService: GreenGrocersServiceService
  ) {}
}
