import { RouterDiscoveryComponent } from './router-discovery.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterDiscoveryRoutingModule } from './router-discovery-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterDiscoveryRoutingModule
  ],
  declarations: [
    RouterDiscoveryComponent
  ]
})
export class RouterDiscoveryModule { }
