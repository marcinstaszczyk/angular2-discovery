import { FormsModule } from '@angular/forms';
import { CustomInputComponent } from './custom-input-component/custom-input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CustomInputComponent
  ], 
  exports: [
    CustomInputComponent
  ]
})
export class FormsSharedModule { }
