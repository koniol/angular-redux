import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ProductState } from '../../store/reducers';

import * as fromStore from '../../store';
import { getSinglePizzaByRouter } from '../../store';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {
  pizza$ = this._store.pipe(select(fromStore.getSinglePizza));

  constructor(private _store: Store<ProductState>) { }

  ngOnInit() {
    this.pizza$ = this._store.pipe(select(getSinglePizzaByRouter));
  }

}
