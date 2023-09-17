import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  isViewportSmall(): Observable<boolean> {
    return this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(
        map(
          results =>
            results.breakpoints[Breakpoints.Small] ||
            results.breakpoints[Breakpoints.XSmall]
        )
      );
  }
}
