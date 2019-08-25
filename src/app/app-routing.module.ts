import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RollComponent } from './roll/roll.component';

const routes: Routes = [{path:'', component:RollComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
