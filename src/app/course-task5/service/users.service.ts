import { UsersSwitchCounterService } from './users-switch-counter.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private usersSwitchCounterService: UsersSwitchCounterService) { }
  
  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.usersSwitchCounterService.userSwitched();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.usersSwitchCounterService.userSwitched();
  }
}
