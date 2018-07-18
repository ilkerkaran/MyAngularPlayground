import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() navChange = new EventEmitter<string>();
  constructor() { }
  onRecipeNavClick() {
    this.navChange.emit('recipe');
  }

  onShoppingListNavClick() {
    this.navChange.emit('shopping');
  }
  ngOnInit() {
  }

}
