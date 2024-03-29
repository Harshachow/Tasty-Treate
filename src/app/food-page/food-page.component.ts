import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../service/food/food.service';
import { Food } from '../shared/models/food';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{
  
  food!: Food;
  constructor(private activatedRoute : ActivatedRoute, private foodService : FoodService
    , private cartService:CartService, private router: Router) {
    activatedRoute.params.subscribe((params)=> {
      if(params['id']){
        this.food = foodService.getFoodById(params['id']);
      }
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
