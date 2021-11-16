import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-border-spinner',
  templateUrl: './border-spinner.component.html',
  styleUrls: ['./border-spinner.component.scss']
})
export class BorderSpinnerComponent implements OnInit {

  @Input() public size: number = 45;
  @Input() public isVisible: boolean = true;
  @Input() public type: 'text-primary' | 'text-secondary' | 'text-success' |
    'text-danger'| 'text-warning' | 'text-info' | 'text-light'| 'text-dark'
    = 'text-primary' ;
  constructor() {
  }

  ngOnInit() {
  }
}
