import {Injectable} from "@angular/core";
import {RecipeService} from "../recipes/recipe.service";
import {HttpClient} from "@angular/common/http";
import {Recipe} from "../recipes/recipe.model";
import * as firebase from "firebase";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();

    return this.http.put('https://angular-test-b2c05.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();

    return this.http.get<Recipe[]>('https://angular-test-b2c05.firebaseio.com/recipes.json?auth=' + token)
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
