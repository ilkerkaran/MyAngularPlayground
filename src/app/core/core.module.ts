import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './../app-routing.module';
import { HomeComponent } from './home/home.component';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
  imports: [CommonModule, AppRoutingModule,SharedModule],
  declarations: [HeaderComponent, HomeComponent],
  exports: [AppRoutingModule, HeaderComponent, HomeComponent],
  providers: [ShoppingListService, RecipeService, AuthService]
})
export class CoreModule {}
