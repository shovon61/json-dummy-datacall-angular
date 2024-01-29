import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PracComponent } from './prac/prac.component';
import { PractwoComponent } from './practwo/practwo.component';


const routes: Routes = [ 
  { path:'first',component: PracComponent },
  { path:'second',component: PractwoComponent }
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
