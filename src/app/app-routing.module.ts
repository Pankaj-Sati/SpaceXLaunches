import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchesComponent } from './launches/launches.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LaunchDataResolver } from './services/data-resolver.service';

const routes: Routes = [
  {
    path:'',component:LaunchesComponent,
    resolve:
    {
      launchItems:LaunchDataResolver
    }
  },
  {
    path:'**',component:PageNotFoundComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
