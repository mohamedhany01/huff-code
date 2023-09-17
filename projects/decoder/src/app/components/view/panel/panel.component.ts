import { Component } from '@angular/core';
import { BreakpointService } from 'projects/decoder/src/services/breakpoint.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'huff-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent {
  icon: string;

  frame: string;

  isSmall$: Observable<boolean> = this.breakpoint.isViewportSmall();

  constructor(private breakpoint: BreakpointService) {
    this.icon = 'enhanced_encryption';
    this.frame = 'encoder';
  }

  switchView() {
    this.toggleIcon();
    this.toggleFrame();
  }

  toggleIcon() {
    this.icon =
      this.icon === 'enhanced_encryption'
        ? 'no_encryption'
        : 'enhanced_encryption';
  }

  toggleFrame() {
    this.frame = this.frame === 'encoder' ? 'decoder' : 'encoder';
  }
}
