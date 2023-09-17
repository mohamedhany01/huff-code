import { Component } from '@angular/core';

@Component({
  selector: 'huff-save-decoded-text',
  templateUrl: './save-decoded-text.component.html',
  styleUrls: ['./save-decoded-text.component.css'],
})
export class SaveDecodedTextComponent {
  href: string;
  download: string;
  extension: string;

  constructor() {
    this.href = '';
    this.download = '';
    this.extension = '.txt';
  }

  createTextBlob(data: string): void {
    const blob = new Blob([data], { type: 'text/plain' });
    this.href = URL.createObjectURL(blob);
    this.download = `${crypto.randomUUID()}${this.extension}`;
  }
}
