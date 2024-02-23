import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Homemade Gnocci',
      'This is simply a test recipe',
      'https://bing.com/th?id=OSK.10e98ee26a0d7a85ae24c1b5864ed471'
    ),
    new Recipe(
      'Milanga Argentina',
      'This is simply a test recipe',
      'https://cdn.tasteatlas.com/images/dishes/8ae6e3c99b2d41a2a15c57d23a337b4e.jpg'
    ),
  ];
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
