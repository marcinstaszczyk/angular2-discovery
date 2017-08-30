import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'MaS-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styles: []
})
export class FormsReactiveComponent implements OnInit {

  availableProjectStatuses = ['Stable', 'Critical', 'Finished'];

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      projectName: new FormControl(null, [Validators.required], this.allowedProjectNamesValidatorAsync),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl('Stable'),
      userName: new FormControl(null, [Validators.required]),
      someValue: new FormControl(null, [Validators.required]),
      checkbox: new FormControl(false),
      someValueNgIf: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.form);
    console.log(this.form.value);
  }

  onReset() {
    this.form.reset({projectStatus: 'Stable'});
  }

  allowedProjectNamesValidator(control: FormControl): {[key: string]: any} {
    if (control.value === 'Test') {
      return { allowedProjectNames: true };
    }
  }

  allowedProjectNamesValidatorAsync(control: FormControl): Promise<{[key: string]: any}> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ allowedProjectNames: true });
        } else {
          resolve(null);
        }
      } ,2000);
    });
    
    
  }

}
