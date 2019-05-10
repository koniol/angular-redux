import { Component, OnInit } from '@angular/core';
import { ProductState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/index';
import { Pizza } from '../../models/pizza.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  pizzas$: Observable<Pizza[]>;
  constructor(private store: Store<ProductState>) { }

  ngOnInit() {
    this.pizzas$ = this.store.select(fromStore.getAllPizzas);
    this.store.dispatch(new fromStore.LoadPizzas());
  }

}
