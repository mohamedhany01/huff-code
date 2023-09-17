import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'huff-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css'],
})
export class SwitcherComponent {
  @Input() iconName: string;

  @Output() clickEmitter = new EventEmitter();

  constructor() {
    this.iconName = '';
  }

  fireEmitter(): void {
    this.clickEmitter.emit();
  }
}
