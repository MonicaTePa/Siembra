import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrchidsComponent } from './components/orchids/orchids.component';
import { FlowersComponent } from './components/flowers/flowers.component';
import { BonsaisComponent } from './components/bonsais/bonsais.component';
import { VegetablesComponent } from './components/vegetables/vegetables.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    Page404Component,
    NavbarComponent,
    OrchidsComponent,
    FlowersComponent,
    BonsaisComponent,
    VegetablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
