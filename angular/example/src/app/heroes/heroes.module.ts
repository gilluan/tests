import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromHeroes from './reducers';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule,
    StoreModule.forFeature('heroes', fromHeroes.reducers, { metaReducers: fromHeroes.metaReducers })
  ],
  declarations: []
})
export class HeroesModule { }
