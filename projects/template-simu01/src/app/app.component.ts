import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {ChangeDetectorRef, NgZone, inject} from '@angular/core';
import {A11yModule, FocusOrigin} from '@angular/cdk/a11y';

import {
  AfterViewInit,
  ElementRef, 
  OnDestroy,
  ViewChild,  
} from '@angular/core';
import {FocusMonitor} from '@angular/cdk/a11y';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, MatSlideToggleModule, MatFormFieldModule, MatSelectModule, A11yModule],
  templateUrl: './html05/app.component.html',
  styleUrl: './html05/app.component.scss'
})
export class AppComponent implements OnDestroy, AfterViewInit {
  title = 'template-simu01';

  private _ngZone = inject(NgZone);
  private _cdr = inject(ChangeDetectorRef);
  focusMonitor = inject(FocusMonitor);
  
  elementOrigin = this.formatOrigin(null);
  subtreeOrigin = this.formatOrigin(null);

  @ViewChild('monitored')
  monitoredEl!: ElementRef<HTMLElement>;

  origin = this.formatOrigin(null);

  formatOrigin(origin: FocusOrigin): string {
    return origin ? origin + ' focused' : 'blurred';
  }

  markForCheck() {
    this._ngZone.run(() => this._cdr.markForCheck());
  }

  ngAfterViewInit() {
    this.focusMonitor.monitor(this.monitoredEl).subscribe(origin =>
      this._ngZone.run(() => {
        this.origin = this.formatOrigin(origin);
        this._cdr.markForCheck();
      }),
    );
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.monitoredEl);
  }

  
}
