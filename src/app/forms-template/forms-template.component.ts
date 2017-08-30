import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'MaS-forms-template',
  templateUrl: './forms-template.component.html',
  styles: []
})
export class FormsTemplateComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
