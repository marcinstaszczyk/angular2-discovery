import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'MaS-other-discovery',
  templateUrl: './other-discovery.component.html',
  styles: [`
    .highlight {
      background-color:red;
    }
  `]
})
export class OtherDiscoveryComponent implements OnInit {

  appliedTextValue = '';
  textValue = '';

  _username = '';

  textVisible = false;
  toggleLog = [];
  logCounter = 0;

  sentence = 'Ala ma kota'
  date = new Date();
  data = { sentence: this.sentence };
  array = [1, 2];

  constructor() { }

  get username() {
    return this._username;
  }
  set username(username: string) {
    this._username = username;
  }

  ngOnInit() {
  }

  onTextValueEntered(event: Event) {
    this.textValue = (<HTMLInputElement>event.target).value;
  }
  onApplyTextValue() {
    this.appliedTextValue = this.textValue;
  }

  onResetUsername() {
    this._username = '';
  }

  onToggleText() {
    this.textVisible = !this.textVisible;
    this.toggleLog.push(++this.logCounter);
  }

  onLongerSentence() {
    this.sentence = this.sentence + ' !';
    this.data.sentence = this.sentence;
  }

  onRefreshDate() {
    this.date = new Date();
  }

  onAddToArray() {
    this.array.push(this.array.length + 1);
  }
}
