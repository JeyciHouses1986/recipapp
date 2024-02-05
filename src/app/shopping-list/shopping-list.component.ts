import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
ingredients: Ingredient[] = [
  new Ingredient ('Salt', 1),
  new Ingredient ('Sugar', 1),
  new Ingredient ('Apples', 5),
  new Ingredient ('Tomatos', 4)
];
}
