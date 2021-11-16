import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-growing-spinner',
  templateUrl: './growing-spinner.component.html',
  styleUrls: ['./growing-spinner.component.scss']
})
export class GrowingSpinnerComponent implements OnInit {
  @Input() public size: number = 45;
  @Input() public isVisible: boolean = true;
  @Input() public type: 'text-primary' | 'text-secondary' | 'text-success' |
    'text-danger'| 'text-warning' | 'text-info' | 'text-light'| 'text-dark'
    = 'text-primary' ;
  constructor() { }

  ngOnInit() {
  }

}

