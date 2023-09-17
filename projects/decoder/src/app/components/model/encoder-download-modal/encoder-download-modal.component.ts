import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { SaveEncodedTextComponent } from '../../button/save-encoded-text/save-encoded-text.component';
import { SaveDecodingTableComponent } from '../../button/save-decoding-table/save-decoding-table.component';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BreakpointService } from 'projects/decoder/src/services/breakpoint.service';
import { DownloadsData } from 'projects/decoder/src/core/utilities/interface/DownloadsData.interface';

@Component({
  selector: 'huff-encoder-download-modal',
  templateUrl: './encoder-download-modal.component.html',
  styleUrls: ['./encoder-download-modal.component.css'],
})
export class EncoderDownloadModalComponent implements OnInit {
  @ViewChild(SaveEncodedTextComponent, { static: true })
  saveEncodedTextButton!: SaveEncodedTextComponent;
  @ViewChild(SaveDecodingTableComponent, { static: true })
  saveDecodingTableButton!: SaveDecodingTableComponent;

  isSmall$: Observable<boolean> = this.breakpoint.isViewportSmall();

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DownloadsData,
    private breakpoint: BreakpointService
  ) {}

  ngOnInit(): void {
    this.saveEncodedTextButton.createEncodedTextBlob(this.data.encodedText);
    this.saveDecodingTableButton.createTableBlob(this.data.frequenciesTable);
  }
}
