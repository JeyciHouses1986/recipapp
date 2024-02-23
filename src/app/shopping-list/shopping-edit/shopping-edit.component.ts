import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.module';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @Output() ingredientToAdd = new EventEmitter<Ingredient>();

  onAddIngredient(name: Ingredient['name'], amount: Ingredient['amount']) {
    const newIngredient = new Ingredient(name, amount);
    this.ingredientToAdd.emit(newIngredient);
    console.log(newIngredient);
  }
}
