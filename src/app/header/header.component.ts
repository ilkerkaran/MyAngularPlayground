import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { RecipeService } from './../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private fetchedRecipes: Recipe[];

  constructor(private recipeService: RecipeService) {}
  ngOnInit() {}

  onSaveData() {
    this.recipeService.saveRecipes().subscribe();
  }

  onFetchData() {
    this.recipeService
      .fetchRecipes()
      .pipe(
        map(response => {
          this.fetchedRecipes = <Recipe[]>response;
          this.fetchedRecipes.forEach(r => {
            if (!r['ingredients']) {
              r.ingredients = [];
            }
          });
        })
      )
      .subscribe(response => {
        this.recipeService.setRecipes(this.fetchedRecipes);
      });
  }
}
