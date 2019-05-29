import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './products/products.module';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { PizzaComponent } from './products/components/pizza/pizza.component';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer, reducers } from './store/reducers';

const routes = [
  {path: 'pizza', component: PizzaComponent},
  {
    path: '',
    redirectTo: 'pizza',
    pathMatch: 'full'
  },
  {path: '**', component: PizzaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    StoreRouterConnectingModule.forRoot({serializer: CustomSerializer}),
    ProductsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: RouterStateSerializer, useClass: CustomSerializer}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
