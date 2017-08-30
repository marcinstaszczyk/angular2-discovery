import { Component, forwardRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgControl, ControlContainer } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomInputComponent),
    multi: true
};

/* Code based on http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel */
@Component({
    selector: 'custom-input',
    template: `<div class="form-group">
                    <label><ng-content></ng-content>
                        <input [(ngModel)]="value"  
                                class="form-control" 
                                (focus)="onFocus()" 
                                (blur)="onBlur()">
                    </label>
                </div>`,
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
    host: {
        '[class.focused]': 'focused'
    }
})
export class CustomInputComponent implements ControlValueAccessor {

    //The internal data model
    private innerValue: any = '';

    private focused: boolean;

    //Placeholders for the callbacks which are later provided
    //by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    //get accessor
    get value(): any {
        return this.innerValue;
    };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    onFocus() {
        this.focused = true;
    }

    //Set touched on blur
    onBlur() {
        this.onTouchedCallback();
        this.focused = false;
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

}
