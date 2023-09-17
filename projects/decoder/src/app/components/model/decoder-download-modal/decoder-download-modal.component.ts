import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { SaveDecodedTextComponent } from '../../button/save-decoded-text/save-decoded-text.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BreakpointService } from 'projects/decoder/src/services/breakpoint.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'huff-decoder-download-modal',
  templateUrl: './decoder-download-modal.component.html',
  styleUrls: ['./decoder-download-modal.component.css'],
})
export class DecoderDownloadModalComponent implements OnInit {
  @ViewChild(SaveDecodedTextComponent, { static: true })
  saveDecodedTextButton!: SaveDecodedTextComponent;

  isSmall$: Observable<boolean> = this.breakpoint.isViewportSmall();

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: string,
    private breakpoint: BreakpointService
  ) {}

  ngOnInit(): void {
    this.saveDecodedTextButton.createTextBlob(this.data);
  }
}
