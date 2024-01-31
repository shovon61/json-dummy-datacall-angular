import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PracComponent } from './prac/prac.component';
import { AppRoutingModule } from './app-routing.module' ;
import { FormsModule } from '@angular/forms';
import { PractwoComponent } from './practwo/practwo.component';

import { ButtonModule } from 'primeng/button';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PracComponent,
    PractwoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
