import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
    'This si simply a test',
     'http://cdn-img.health.com/sites/default/files/styles/large_16_9/public/1470949021/crispy-farro-shrimp-stir-fry-bowel-recipe.jpg'),
     new Recipe('A Test Recipe',
     'This si simply a test',
      'http://cdn-img.health.com/sites/default/files/styles/large_16_9/public/1470949021/crispy-farro-shrimp-stir-fry-bowel-recipe.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
