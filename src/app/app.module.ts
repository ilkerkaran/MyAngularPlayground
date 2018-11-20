import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipesModule } from './recipes/recipes.module';
import { AuthService } from './auth/auth.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  // Order in impport ensures that the Catch-all/ wildcard routes work correctly.
  imports: [
    BrowserModule,
    FormsModule,
    RecipesModule,
    ShoppingListModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,

  ],
  providers: [ShoppingListService, RecipeService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
