import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[neutronInput]'
})
export class InputDirective {
  @Input('neutronInput') neutronInput: 'text' | 'textarea';

  @HostBinding('attr.type') get inputType() {
    if (!this.neutronInput) {
      throw new Error("Attribute 'neutronInput' is required");
    }

    if (this.neutronInput === 'text') {
      return 'text';
    } else if (this.neutronInput === 'textarea') {
      return 'textarea';
    }
  }
  @HostBinding('class.neutron--input') baseClass = true;

  @HostBinding('class.neutron--input--invalid')
  @Input('invalid')
  invalid = false;

  @Input() siteTheme: 'primary' | 'secondary' = 'primary';
  @Input() theme: 'light' | 'dark' = 'dark';

  @HostBinding('class.neutron--input--light') get lightTheme() {
    return this.theme === 'light';
  }

  @HostBinding('class.neutron--input--dark') get darkTheme() {
    return this.theme === 'dark';
  }

  @HostBinding('class.neutron--input--primary') get primaryTheme() {
    return this.siteTheme === 'primary';
  }

  @HostBinding('class.neutron--input--secondary') get secondaryTheme() {
    return this.siteTheme === 'secondary';
  }

  constructor() {}
}
