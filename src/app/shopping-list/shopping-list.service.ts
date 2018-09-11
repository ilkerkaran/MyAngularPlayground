import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 7),
        new Ingredient('Tomatoes', 11)];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredientToAdd: Ingredient) {
        this.ingredients.push(ingredientToAdd);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    addIngredients(ingredientsToAdd: Ingredient[]) {
        this.ingredients.push(...ingredientsToAdd);
    }
}
