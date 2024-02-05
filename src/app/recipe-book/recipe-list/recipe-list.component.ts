import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Homemade Gnocci',
      'This is simply a test recipe',
      'https://bing.com/th?id=OSK.10e98ee26a0d7a85ae24c1b5864ed471'),
    new Recipe(
      'Homemade Gnocci',
      'This is simply a test recipe',
      'https://bing.com/th?id=OSK.10e98ee26a0d7a85ae24c1b5864ed471')
  ];
}
