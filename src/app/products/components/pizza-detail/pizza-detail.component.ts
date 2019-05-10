import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductState } from '../../store/reducers';

import * as fromStore from '../../store';
import { Observable } from 'rxjs';
import { Pizza } from '../../models/pizza.model';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {
  pizza$: Observable<Pizza>;
  constructor(private _store: Store<ProductState>) { }

  ngOnInit() {
    console.log(this._store)
    // this.pizza$ = this.store.select(fromStore.getAllPizzas);
  }

}
