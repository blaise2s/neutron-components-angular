import { moduleMetadata } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { CommonModule } from '@angular/common';
import { InputModule } from '../input/input.module';
import { InputDemoComponent } from './input-demo.component';

export default {
  component: InputDemoComponent,
  title: 'Input',
  decorators: [
    moduleMetadata({
      declarations: [InputDemoComponent],
      imports: [CommonModule, InputModule]
    }),
    withKnobs,
    withA11y
  ]
};

export const basic = () => ({
  template: `
    <neutron-input-demo
      [theme]="theme"
      [siteTheme]="siteTheme"
      [label]="label"
      [placeholder]="placeholder"
      [helperText]="helperText"
      [invalid]="invalid"
      [invalidMessage]="invalidMessage"
      [disabled]="disabled"
    >
    </neutron-input-demo>
  `,
  props: {
    theme: select('Theme', ['light', 'dark'], 'dark'),
    siteTheme: select('Site Theme', ['primary', 'secondary'], 'primary'),
    label: text('Label', 'First Name'),
    placeholder: text('Placeholder', 'Luther'),
    helperText: text('Helper Text', 'Enter your first name'),
    invalid: boolean('Invalid', false),
    invalidMessage: text('Invalid Message', 'Validation Error'),
    disabled: boolean('Disabled', false)
  }
});
