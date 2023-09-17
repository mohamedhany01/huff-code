import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { HuffmanEncoder } from 'projects/decoder/src/core/HuffmanEncoder';
import { Entry } from 'projects/decoder/src/core/utilities/interface/Entry.interface';
import { NgModel } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DownloadsData } from 'projects/decoder/src/core/utilities/interface/DownloadsData.interface';
import { Observable } from 'rxjs';
import { BreakpointService } from 'projects/decoder/src/services/breakpoint.service';
import { StringManager } from 'projects/decoder/src/core/utilities/io/helper';
import { EncoderDownloadModalComponent } from '../../model/encoder-download-modal/encoder-download-modal.component';

@Component({
  selector: 'huff-encoder-frame',
  templateUrl: './encoder-frame.component.html',
  styleUrls: ['./encoder-frame.component.css'],
})
export class EncoderFrameComponent implements OnInit {
  @ViewChild(EncoderDownloadModalComponent)
  downloads!: EncoderDownloadModalComponent;

  @ViewChild('textArea', { static: true }) textArea!: ElementRef;

  inputText: string;

  isSmall$: Observable<boolean> = this.breakpoint.isViewportSmall();

  constructor(
    public modal: MatDialog,
    private breakpoint: BreakpointService
  ) {
    this.inputText = '';
  }

  ngOnInit(): void {
    this.textArea.nativeElement.focus();
  }

  generateAssets(input: NgModel) {
    const helper = new StringManager();

    const text: string = helper.clean(input.value);

    if (helper.isEmpty(text)) {
      return;
    }

    const encoder: HuffmanEncoder = new HuffmanEncoder(text);

    const encodedText: string | null = encoder.getEncodedText();
    const frequenciesTable: Entry[] | null = encoder.getFrequencies();

    this.openDialog({
      encodedText: encodedText!,
      frequenciesTable: frequenciesTable!,
    });
  }

  openDialog(data: DownloadsData): void {
    this.modal.open(EncoderDownloadModalComponent, {
      width: '420px',
      data,
      autoFocus: false,
    });
  }
}
