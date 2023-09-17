import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveEncodedTextComponent } from './components/button/save-encoded-text/save-encoded-text.component';
import { SaveDecodingTableComponent } from './components/button/save-decoding-table/save-decoding-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EncoderFrameComponent } from './components/view/encoder-frame/encoder-frame.component';
import { DecoderFrameComponent } from './components/view/decoder-frame/decoder-frame.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { SwitcherComponent } from './components/button/switcher/switcher.component';
import { MatIconModule } from '@angular/material/icon';
import { PanelComponent } from './components/view/panel/panel.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { CloseModalComponent } from './components/button/close-modal/close-modal.component';
import { EncoderDownloadModalComponent } from './components/model/encoder-download-modal/encoder-download-modal.component';
import { DecoderDownloadModalComponent } from './components/model/decoder-download-modal/decoder-download-modal.component';
import { SaveDecodedTextComponent } from './components/button/save-decoded-text/save-decoded-text.component';

@NgModule({
  declarations: [
    AppComponent,
    SaveEncodedTextComponent,
    SaveDecodingTableComponent,
    NotFoundComponent,
    EncoderFrameComponent,
    DecoderFrameComponent,
    SwitcherComponent,
    PanelComponent,
    CloseModalComponent,
    EncoderDownloadModalComponent,
    DecoderDownloadModalComponent,
    SaveDecodedTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    NgxMatFileInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
