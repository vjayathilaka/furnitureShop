import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipeUrls: string[] = [
        "https://upload.wikimedia.org/wikipedia/en/1/12/American-Furniture.jpg",
        "http://www.showpiecedesign.co.uk/wp-content/uploads/2016/04/Homestead-Corner-Set.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmmR7w0gaaYjmaE9T75S6jOO3jr6m4Ge8aGP0Nxv_TdDe65ukZ5w",
        "http://www.thierrybesancon.com/upload/2017/10/12/jfa-best-place-to-buy-home-office-furniture-showroom-in-chennai-furniture-l-5a0ed42986c700e7.jpg",
        "https://cdn.pixabay.com/photo/2015/09/29/21/32/furniture-964584_960_720.jpg",
        "http://www.thierrybesancon.com/upload/2017/10/12/jfa-best-place-to-buy-home-office-furniture-showroom-in-chennai-furniture-l-5a0ed42986c700e7.jpg"
    ];

    private ingredients: Ingredient[] = [
        new Ingredient('apple', 10),
        //new Ingredient('banana', 3),
        //new Ingredient('papaya', 2),
        new Ingredient('pinaple', 1)
    ];

    private recipes: Recipe[] = [
        new Recipe(0, "Test recipe", "Test recipe description", this.recipeUrls[0], this.ingredients),
        new Recipe(1, "Test recipe", "Test recipe description", this.recipeUrls[1], this.ingredients),
        new Recipe(2, "another recipe", "Test recipe description", this.recipeUrls[2], this.ingredients),
        new Recipe(3, "another recipe", "Test recipe description", this.recipeUrls[3], this.ingredients),
        new Recipe(4, "another recipe", "Test recipe description", this.recipeUrls[4], this.ingredients)
      ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipeById(id: number) {
        const recipe = this.recipes.find(
            (r) => {
                return r.id == id;
            }
        );
        return recipe;
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
    }

    updateRecipe(index: number, recipe: Recipe){
        this.recipes[index] = recipe;
    }
}