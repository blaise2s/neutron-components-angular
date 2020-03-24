import { Directive, HostBinding, Input, OnInit } from '@angular/core';

type Button =
  | 'primary'
  | 'primary-stroked'
  | 'primary-ghost'
  | 'secondary'
  | 'secondary-stroked'
  | 'secondary-ghost'
  | 'danger'
  | 'danger-stroked'
  | 'danger-ghost';

@Directive({
  selector: '[neutronButton]'
})
export class ButtonDirective implements OnInit {
  @Input('neutronButton') neutronButton: Button = 'primary';

  @HostBinding('class.neutron--btn')
  get baseClass() {
    return true;
  }

  @HostBinding('class.neutron--btn--primary')
  get primaryButton() {
    return this.neutronButton === 'primary';
  }

  @HostBinding('class.neutron--btn--primary--stroked')
  get primarySrokedButton() {
    return this.neutronButton === 'primary-stroked';
  }

  @HostBinding('class.neutron--btn--primary--ghost')
  get primaryGhostButton() {
    return this.neutronButton === 'primary-ghost';
  }

  @HostBinding('class.neutron--btn--secondary')
  get secondaryButton() {
    return this.neutronButton === 'secondary';
  }

  @HostBinding('class.neutron--btn--secondary--stroked')
  get secondarySrokedButton() {
    return this.neutronButton === 'secondary-stroked';
  }

  @HostBinding('class.neutron--btn--secondary--ghost')
  get secondaryGhostButton() {
    return this.neutronButton === 'secondary-ghost';
  }

  @HostBinding('class.neutron--btn--danger')
  get dangerButton() {
    return this.neutronButton === 'danger';
  }

  @HostBinding('class.neutron--btn--danger--stroked')
  get dangerStrokedButton() {
    return this.neutronButton === 'danger-stroked';
  }

  @HostBinding('class.neutron--btn--danger--ghost')
  get dangerGhostButton() {
    return this.neutronButton === 'danger-ghost';
  }

  constructor() {}

  ngOnInit() {
    if (!this.neutronButton) {
      this.neutronButton = 'primary';
    }
  }
}
