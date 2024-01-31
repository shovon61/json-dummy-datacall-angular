import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PracComponent } from './prac/prac.component';
import { PractwoComponent } from './practwo/practwo.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [ 
  { path:'maintable',component: PracComponent },
  { path:'second',component: PractwoComponent },
  { path:'menu',component:MenuComponent }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
   exports: [RouterModule] 
})
export class AppRoutingModule { }
