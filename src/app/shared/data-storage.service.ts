import {Injectable} from "@angular/core";
import {RecipeService} from "../recipes/recipe.service";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://angular-test-b2c05.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

}
