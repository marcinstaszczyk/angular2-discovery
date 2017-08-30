import { CourseProjectComponent } from './course-project.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseProjectRoutingModule } from './course-project-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CourseProjectRoutingModule
  ],
  declarations: [
    CourseProjectComponent
  ]
})
export class CourseProjectModule { }
