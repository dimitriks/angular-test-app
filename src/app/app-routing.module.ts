import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {HomeComponent} from "./home/home.component";

const appRouts: Routes = [
  { path: '', component: HomeComponent},
  { path: 'recipes', loadChildren: './recipes/recipe.module#RecipesModule'},
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
