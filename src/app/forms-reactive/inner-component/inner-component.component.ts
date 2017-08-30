import { Component, OnInit, forwardRef } from '@angular/core';
import { AbstractControl, ControlContainer } from '@angular/forms';

@Component({
  selector: 'MaS-inner-component',
  template: `
  <div class="form-group" [formGroup]="form">
    <label for="userName">User name</label>
    <input type="text" id="userName" name="userName" class="form-control" formControlName="userName">
    <span *ngIf="form.get('userName').touched && form.get('userName').errors" class="help-block">
      <span *ngIf="form.get('userName').errors['required']">Please provide not empty User name</span>
    </span>
  </div>
  `,
  styles: [],
})
export class InnerComponentComponent implements OnInit {

  form: AbstractControl;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit() {
    this.form = this.controlContainer.control;
  }

}
