import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchesComponent } from './launches/launches.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',component:LaunchesComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
