import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 7),
    new Ingredient('Tomatoes', 11)

  ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdd(ingredientToAdd: Ingredient) {
    this.ingredients.push(ingredientToAdd);
  }

}
