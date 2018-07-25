import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }
nameInput = '';
amountInput = 0;
  ngOnInit() {
  }

  onAddClick(name, amount) {
    this.ingredientAdded.emit(new Ingredient(this.nameInput, this.amountInput));
  }

}
