import { CommonModule } from '@angular/common';
import { Task5RoutingModule } from './task5-routing.module';
import { UsersService } from './service/users.service';
import { UsersSwitchCounterService } from './service/users-switch-counter.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Task5Component } from './task5.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';

@NgModule({
  declarations: [
    Task5Component,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    Task5RoutingModule
  ],
  exports: [Task5Component],
  providers: [UsersSwitchCounterService, UsersService]
})
export class Task5Module { }
