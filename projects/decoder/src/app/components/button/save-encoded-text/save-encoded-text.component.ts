import { Component } from '@angular/core';

@Component({
  selector: 'huff-save-encoded-text',
  templateUrl: './save-encoded-text.component.html',
  styleUrls: ['./save-encoded-text.component.css'],
})
export class SaveEncodedTextComponent {
  href: string;
  download: string;
  extension: string;

  constructor() {
    this.href = '';
    this.download = '';
    this.extension = '.huff';
  }

  // Working with Binaries https://www.youtube.com/watch?v=SWsHwdSrPr4
  createEncodedTextBlob(data: string): void {
    const blob = new Blob([data], { type: 'text/plain' });
    this.href = URL.createObjectURL(blob);
    this.download = `${crypto.randomUUID()}${this.extension}`;
  }
}
