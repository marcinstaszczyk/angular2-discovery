import { DropdownToggleDirective } from './dropdown-toggle.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DropdownToggleDirective
  ],
  exports: [
    DropdownToggleDirective
  ]
})
export class SharedModule { }
