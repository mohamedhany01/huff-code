import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HuffmanDecoder } from 'projects/decoder/src/core/HuffmanDecoder';
import { getFileData } from 'projects/decoder/src/core/utilities/io/files';
import { deserializeFrequencies } from 'projects/decoder/src/core/utilities/serialization/serializer';
import { Entry } from 'projects/decoder/src/core/utilities/interface/Entry.interface';
import { BreakpointService } from 'projects/decoder/src/services/breakpoint.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DecoderDownloadModalComponent } from '../../model/decoder-download-modal/decoder-download-modal.component';

@Component({
  selector: 'huff-decoder-frame',
  templateUrl: './decoder-frame.component.html',
  styleUrls: ['./decoder-frame.component.css'],
})
export class DecoderFrameComponent implements OnInit {
  encodedText: string | null;
  decodingTable: string | null;
  decodedText: string;
  href: string;
  download: string;
  extension: string;
  uploadForm!: FormGroup;

  isSmall$: Observable<boolean> = this.breakpoint.isViewportSmall();

  constructor(
    public modal: MatDialog,
    private builder: FormBuilder,
    private breakpoint: BreakpointService
  ) {
    this.encodedText = '';
    this.decodingTable = '';
    this.decodedText = '';
    this.href = '';
    this.download = '';
    this.extension = '.txt';
  }

  ngOnInit(): void {
    this.uploadForm = this.builder.group(
      {
        encodedText: ['', Validators.required],
        decodingTable: ['', Validators.required],
      },
      {
        updateOn: 'submit',
      }
    );
  }

  async decode() {
    // Read the blobs
    const textBlob: File = this.uploadForm.value['encodedText'];
    const tableBlob: File = this.uploadForm.value['decodingTable'];

    if (!tableBlob || !tableBlob) {
      return;
    }

    // Read the data from the uploaded files
    this.encodedText = await getFileData(textBlob);
    this.decodingTable = await getFileData(tableBlob);

    // Decoding the text using the frequencies table and encoding text
    const frequencies: Entry[] | null = deserializeFrequencies(
      this.decodingTable
    );
    const decoder: HuffmanDecoder = new HuffmanDecoder(
      this.encodedText,
      frequencies
    );

    this.decodedText = decoder.getDecodedText();

    if (this.decodedText) {
      this.openDialog(this.decodedText);
    }
  }

  openDialog(data: string): void {
    this.modal.open(DecoderDownloadModalComponent, {
      width: '420px',
      data,
      autoFocus: false,
    });
  }
}
