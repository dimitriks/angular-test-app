import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {SharedModul} from "./shared/shared.modul";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {AuthModule} from "./auth/auth.module";
import {AuthRoutingModule} from "./auth/auth-routing.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModul,
    ShoppingListModule,
    AuthModule,
    AuthRoutingModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
