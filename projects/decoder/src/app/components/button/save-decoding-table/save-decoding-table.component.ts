import { Component } from '@angular/core';
import { serializeFrequencies } from 'projects/decoder/src/core/utilities/serialization/serializer';
import { Entry } from 'projects/decoder/src/core/utilities/interface/Entry.interface';

@Component({
  selector: 'huff-save-decoding-table',
  templateUrl: './save-decoding-table.component.html',
  styleUrls: ['./save-decoding-table.component.css'],
})
export class SaveDecodingTableComponent {
  href: string;
  download: string;
  extension: string;

  constructor() {
    this.href = '';
    this.download = '';
    this.extension = '.json';
  }

  createTableBlob(data: Entry[]): void {
    const serialized = serializeFrequencies(data);
    const blob = new Blob([serialized], { type: 'text/plain' });
    this.href = URL.createObjectURL(blob);
    this.download = `${crypto.randomUUID()}${this.extension}`;
  }
}
