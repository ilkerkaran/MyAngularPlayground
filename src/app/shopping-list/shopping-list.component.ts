import { Component, OnInit } from '@angular/core';
import { Ingredeient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredeient[] = [
    new Ingredeient('Apples', 7),
    new Ingredeient('Tomatoes', 11)

  ];
  constructor() { }

  ngOnInit() {
  }

}
