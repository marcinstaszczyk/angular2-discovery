import { Component, OnInit, OnDestroy, Host, SkipSelf, forwardRef } from '@angular/core';
import { AbstractFormGroupDirective, ControlContainer, AbstractControl, Form } from '@angular/forms';

const formGroupNameProvider: any = {
  provide: ControlContainer,
  useExisting: forwardRef(() => InnerComponentComponent)
};

@Component({
  selector: 'MaS-inner-component',
  template: `
  <br/>
  <i>Following input is inside another component. <br/>
  Despite using ngModel it doesn't register itself to form.</i>
  <div class="form-group">
    <label for="userName">User Name</label>
    <input type="text" id="userName" name="userName" class="form-control" ngModel #userName="ngModel" required>
    <div *ngIf="!userName.valid && userName.touched">Please provide not empty User Name</div>
  </div>
  `,
  styles: [],
  //providers: [ formGroupNameProvider ]
})
export class InnerComponentComponent {

}
/*export class InnerComponentComponent extends ControlContainer implements OnInit, OnDestroy {
  control: AbstractControl;
  _parent: ControlContainer;

  constructor(
      @Host() @SkipSelf() parent: ControlContainer ) {
    super();
    this.control = parent.control;
    this._parent = parent;
  }

  get formDirective(): Form|null { return this._parent.formDirective; }

  ngOnInit() {};
  ngOnDestroy() {};
}*/
/*export class InnerComponentComponent extends AbstractFormGroupDirective implements OnInit, OnDestroy {

  constructor(
      @Host() @SkipSelf() parent: ControlContainer ) { 
    super();
    console.log(parent);
    (<any>this)._parent = parent;
    (<any>this).name = 'userName';
  }
}*/
