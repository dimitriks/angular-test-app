import {Injectable} from "@angular/core";
import {RecipeService} from "../recipes/recipe.service";
import {HttpClient} from "@angular/common/http";
import {Recipe} from "../recipes/recipe.model";

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://angular-test-b2c05.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get<Recipe[]>('https://angular-test-b2c05.firebaseio.com/recipes.json')
      .subscribe(
        (response) => {
          const recipes: Recipe[] = response;

          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
            }
          }
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
