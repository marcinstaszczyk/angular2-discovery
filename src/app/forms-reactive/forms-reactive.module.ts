import { FormsSharedModule } from './../forms-shared/forms-shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsReactiveComponent } from './forms-reactive.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsReactiveRoutingModule } from './forms-reactive-routing.module';
import { InnerComponentComponent } from './inner-component/inner-component.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsSharedModule,
    FormsReactiveRoutingModule
  ],
  declarations: [
    FormsReactiveComponent,
    InnerComponentComponent
  ]
})
export class FormsReactiveModule { }
