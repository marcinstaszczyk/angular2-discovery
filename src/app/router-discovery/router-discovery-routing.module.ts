import { RouterDiscoveryComponent } from './router-discovery.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: RouterDiscoveryComponent },
  { path: ':id', component: RouterDiscoveryComponent }
];

// { path: 'router-discovery', component: RouterDiscoveryComponent },
// { path: 'router-discovery/:id', component: RouterDiscoveryComponent },

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterDiscoveryRoutingModule { }
