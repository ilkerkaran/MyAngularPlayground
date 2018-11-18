import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Ingredient } from './../shared/ingredient.model';
import { RecipeService } from './../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private fetchedRecipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
    public authService: AuthService,
    private router: Router
  ) {}
  ngOnInit() {}

  onsignOut() {
    this.authService.signOut();
    console.log('sign-out executed.');
    this.router.navigate(['/signin']);
  }

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
