import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../shared/ingredient.model';


export class ShoppingListService {

    ingredientEditStart = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient("apple", 10),
        new Ingredient("orange", 2)
      ];

    getIngredients() {
        return this.ingredients;
    }

    getIngredientById(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    updateIngredient(index:number, ingredient: Ingredient) {
        console.log('update --> ' + ingredient.amount);
        this.ingredients[index] = ingredient;
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
    }
    
}