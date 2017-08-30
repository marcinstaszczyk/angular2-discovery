import { OtherDiscoveryComponent } from './other-discovery.component';
import { OtherDiscoveryRoutingModule } from './other-discovery-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ChangeTestComponent } from './change-test/change-test.component';
import { ClassSelectorComponent } from './class-selector/class-selector.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordReversePipe } from './pipes/word-reverse.pipe';
import { ExtractPropertyPipe } from './pipes/extract-property.pipe';
import { ArrayReversePipe } from './pipes/array-reverse.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    SharedModule,
    OtherDiscoveryRoutingModule
  ],
  declarations: [
    OtherDiscoveryComponent,
    ClassSelectorComponent,
    ChangeTestComponent,
    WordReversePipe,
    ExtractPropertyPipe,
    ArrayReversePipe,
  ]
})
export class OtherDiscoveryModule { }
