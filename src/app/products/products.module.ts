import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { PizzaComponent } from './components/pizza/pizza.component';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { RouterModule, Routes } from '@angular/router';
import { PizzaDetailComponent } from './components/pizza-detail/pizza-detail.component';

const routes: Routes = [
  {
    path: 'pizza/:id',
    component: PizzaDetailComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {path: '**', component: PizzaComponent}
];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects),
    RouterModule.forRoot(routes),
  ],
  declarations: [PizzaComponent, PizzaDetailComponent],
  exports: [PizzaComponent],
})
export class ProductsModule {
}
