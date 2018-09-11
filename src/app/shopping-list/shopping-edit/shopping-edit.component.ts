import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(protected shoppingListService: ShoppingListService) { }
  nameInput = '';
  amountInput = 0;
  ngOnInit() {
  }

  onAddClick() {
    this.shoppingListService.addIngredient(new Ingredient(this.nameInput, this.amountInput));
  }

}
