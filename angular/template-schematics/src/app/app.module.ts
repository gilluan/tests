import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScDepositoComponent } from './sc-deposito/sc-deposito.component';
import { ScDaylanComponent } from './sc-daylan/sc-daylan.component';

@NgModule({
  declarations: [
    AppComponent,
    ScDepositoComponent,
    ScDaylanComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
