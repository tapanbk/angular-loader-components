import {Component, Inject, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpinnerComponent implements OnDestroy {
  public isSpinnerVisible = true;
  @Input() public backgroundColor  = '#1976d2';
  @Input() public size = 50;
  @Input() public isVisible: boolean = false;

  constructor(private router: Router) {
      this.router.events.subscribe(
        event => {
          if (event instanceof NavigationStart) {
            this.isSpinnerVisible = true;
          } else if (
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError
          ) {
            this.isSpinnerVisible = false;
          }
        },
        () => {
          this.isSpinnerVisible = false;
        }
      );
  }

  ngOnDestroy(): void {
  }

}
