import { Component } from '@angular/core';

@Component({
  selector: 'MaS-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  showMobileNavigation = false;

  onNavClick() {
    this.showMobileNavigation = false;
  }

  onNavButtonClick() {
    this.showMobileNavigation = !this.showMobileNavigation;
  }
}
