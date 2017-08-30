import { HomeComponent } from './core/home/home.component';
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';
import { RouterDiscoveryComponent } from './router-discovery/router-discovery.component';
import { CourseProjectComponent } from './course-project/course-project.component';
import { Task5Component } from './course-task5/task5.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'discovery', loadChildren: './other-discovery/other-discovery.module#OtherDiscoveryModule' },
  { path: 'task5', loadChildren: './course-task5/task5.module#Task5Module' },
  { path: 'course-project', loadChildren: './course-project/course-project.module#CourseProjectModule' },
  { path: 'router-discovery', loadChildren: './router-discovery/router-discovery.module#RouterDiscoveryModule' },
  { path: 'forms-discovery', loadChildren: './forms-template/forms-template.module#FormsTemplateModule' },
  { path: 'forms-reactive', loadChildren: './forms-reactive/forms-reactive.module#FormsReactiveModule' },
  { path: '', redirectTo: '/home' , pathMatch: 'full'},
  { path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
