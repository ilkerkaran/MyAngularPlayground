import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes = [
    new Recipe(
      1,
      'Spicy sausage ragu with spirali',
      'Spicy sausage ragu with spirali recipe',
      'https://realfood.tesco.com/media/images/RFO-1400x919-SpicySausageRaguPenne-mini-58867b43-4e81-4123-85cf-4014a3c56419-0-1400x919.jpg',
      [
        new Ingredient('Onion', 1),
        new Ingredient('carrot', 1),
        new Ingredient('pork sousage', 6)
      ]
    ),
    new Recipe(
      2,
      'Mediterranean orzo salad',
      'Mediterranean orzo salad for fit meals',
      'https://realfood.tesco.com/media/images/RFO-1400x919-OrzoSalad-ab644c17-9bd2-462d-8dc4-ec158d22cf0f-0-1400x919.jpg',
      [
        new Ingredient('Lemon', 1),
        new Ingredient('courgatte', 2),
        new Ingredient('babay tomato', 6)
      ]
    )
  ];
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id - 1];
    const myR = this.recipes.find(r => {
      return r.id === id;
    });
    return myR;
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    console.log(this.recipes);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(id: number, recipe: Recipe) {
    this.recipes[id - 1] = recipe;
    console.log(this.recipes);
    this.recipesChanged.next(this.recipes.slice());
  }

  removeRecipe(index: number) {
    this.recipes.splice(index - 1, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
