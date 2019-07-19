import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuIzquierdoComponent } from './menu-izquierdo/menu-izquierdo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuIzquierdoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
