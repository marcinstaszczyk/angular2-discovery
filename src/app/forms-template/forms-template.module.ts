import { FormsSharedModule } from '../forms-shared/forms-shared.module';
import { FormsModule } from '@angular/forms';
import { InnerComponentComponent } from './inner-component/inner-component.component';
import { FormsTemplateComponent } from './forms-template.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsTemplateRoutingModule } from './forms-template-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormsTemplateRoutingModule,
    FormsSharedModule
  ],
  declarations: [
    FormsTemplateComponent,
    InnerComponentComponent,
  ]
})
export class FormsTemplateModule { }
