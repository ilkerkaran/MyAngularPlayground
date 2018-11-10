import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  ingChangedSub: Subscription;
  constructor(protected shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingChangedSub = this.shoppingListService.ingredientsChanged.subscribe(
      ingredients => (this.ingredients = ingredients)
    );
  }

  onEditItem(index: number) {
    console.log(index);

    this.shoppingListService.startedEditing.next(index);
  }
  ngOnDestroy(): void {
    this.ingChangedSub.unsubscribe();
  }
}
