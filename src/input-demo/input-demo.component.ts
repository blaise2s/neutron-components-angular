import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'neutron-input-demo',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.scss']
})
export class InputDemoComponent implements OnInit {
  @Input() theme = 'light';
  @Input() siteTheme = 'secondary';
  @Input() label = 'First Name';
  @Input() placeholder = 'Luther';
  @Input() helperText = 'Enter your first name';
  @Input() invalid = false;
  @Input() invalidMessage = 'Validation Error';
  @Input() disabled = false;

  constructor() {}

  ngOnInit(): void {}
}
