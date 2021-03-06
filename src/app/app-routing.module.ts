import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // so the application can have routing functionality.

import { HeroesComponent } from './heroes/heroes.component'; // will give the Router somewhere to go once you configure the routes.
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

//Routes tell the Router which view to display when a 
//user clicks a link or pastes a URL into the browser address bar.
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // To make the application navigate to the dashboard automatically 
  { path: 'detail/:id', component: HeroDetailComponent }
];

// add initializes the router and starts it listening for browser location changes.
@NgModule({
  imports: [RouterModule.forRoot(routes)], // adds the RouterModule to the AppRoutingModule imports array and configures it with the routes in one step by calling RouterModule.forRoot()
  exports: [RouterModule] // AppRoutingModule exports RouterModule so it will be available throughout the application.
})
export class AppRoutingModule { }