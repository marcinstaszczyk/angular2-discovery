import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[MaSDropdownToggle]'
})
export class DropdownToggleDirective {

  /*@HostBinding('class') @Input('class') elementClass: string;

  @HostListener('click') function (event: Event) {
    if (this.elementClass.includes(" show")) {
      this.elementClass = this.elementClass.replace(" show", "");
    } else {
      this.elementClass = this.elementClass + " show";
    }
  }*/
  @HostBinding('class.show') isShown = false;

  @Input('MaSDropdownToggle') targetId: string;

  @HostListener('click') toggle () {
    this.isShown = !this.isShown;
    console.log(this.targetId);

    //this.elRef
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

}
