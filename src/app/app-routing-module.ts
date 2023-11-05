import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';




const routes: Routes = [
  {path:'', component:HomeComponent}, 
  {path:'home', component:HomeComponent}, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 120]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
