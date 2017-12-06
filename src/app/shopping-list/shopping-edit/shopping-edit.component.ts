import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') ngForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedIndex: number;
  editedIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.ingredientEditStart.subscribe(
      (index: number) => {
        console.log('subscribe --->');
        this.editMode = true;
        this.editedIndex = index;
        this.editedIngredient = this.shoppingListService.getIngredientById(index);
        this.ngForm.setValue({
          name: this.editedIngredient.name,
          amount: this.editedIngredient.amount
        });
      }
    );
  }

  onFormSubmit(form: NgForm){
    console.log('on form submit');
    const name = form.value.name;
    const amount = form.value.amount;
    const newIngredient = new Ingredient(name, amount);
    if(this.editMode)
      this.updateIngredient(newIngredient);
    else
      this.addIngredient(newIngredient);
    this.editMode = false;
  }

  addIngredient(ingredient: Ingredient) {
    this.shoppingListService.addIngredient(ingredient);
    this.ngForm.reset();
  }

  updateIngredient(ingredient: Ingredient) {
    this.shoppingListService.updateIngredient(this.editedIndex, ingredient);
    this.ngForm.reset();
  }

  onClear() {
    this.ngForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedIndex);
    this.editMode = false;
    this.ngForm.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
