import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 7),
        new Ingredient('Tomatoes', 11)];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredientToAdd: Ingredient) {
        this.ingredients.push(ingredientToAdd);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredientsToAdd: Ingredient[]) {
        this.ingredients.push(...ingredientsToAdd);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
