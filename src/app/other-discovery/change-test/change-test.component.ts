import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'MaS-change-test',
  template: `
    <button type="button" (click)="onButtonClick()" class="btn btn-secondary">Test</button>
  `,
  styles: []
})
export class ChangeTestComponent implements OnInit, OnChanges {

  @Output("testChange") update = new EventEmitter();
  @Input("test") testValue: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  onButtonClick() {
    this.update.emit(this.testValue + " Set without listener, [(ngModel)] style :-) .");
  }
}
