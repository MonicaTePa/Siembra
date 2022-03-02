import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { BonsaisComponent } from './components/bonsais/bonsais.component';
import { OrchidsComponent } from './components/orchids/orchids.component';
import { FlowersComponent } from './components/flowers/flowers.component';
import { VegetablesComponent } from './components/vegetables/vegetables.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'bonsais',component:BonsaisComponent},
  {path:'orchids',component:OrchidsComponent},
  {path:'vegetables',component:VegetablesComponent},
  {path:'flowers',component:FlowersComponent},
  {path:'404',component:Page404Component},
  {path:'**',redirectTo:'404',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
