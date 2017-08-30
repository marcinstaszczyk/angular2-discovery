import { Injectable } from '@angular/core';

export class UsersSwitchCounterService {

  private count = 0;

  constructor() { }

  userSwitched() {
    console.log(++this.count);
  }
}
