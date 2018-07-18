import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedNav = 'recipe';
  title = 'app';

  isRecipeNavSelected() {
    return this.selectedNav === 'recipe';
  }

  isShoppingNavSelected() {
    return this.selectedNav ==='shopping';
  }
}
