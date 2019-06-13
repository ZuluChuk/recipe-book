import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipesComponent} from './recipes/recipes.component';
import {AppModule} from './app.module';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes'},
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: 'recipes', component: RecipesComponent}
];

@NgModule(
  {
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ]
  }
)

export class AppRoutingModule{

}
