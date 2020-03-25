import {
  Component,
  OnInit,
  HostBinding,
  Input,
  AfterContentInit,
  ViewChild,
  ElementRef,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'neutron-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterContentInit {
  @HostBinding('class.neutron--form-item') labelClass = true;

  @ViewChild('wrapper', { static: true }) wrapper: ElementRef<HTMLDivElement>;

  @Input('helperText') helperText: string;
  @Input('invalid') invalid = false;
  @Input('invalidMessage') invalidMessage: string | TemplateRef<any>;

  static counter = 0;
  labelID = `neutron-label-${InputComponent.counter}`;

  constructor() {
    InputComponent.counter += 1;
  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.wrapper.nativeElement
      .querySelector('input,textarea,div')
      .setAttribute('id', this.labelID);
  }

  isTemplate(value: string | TemplateRef<any>) {
    return value instanceof TemplateRef;
  }
}
