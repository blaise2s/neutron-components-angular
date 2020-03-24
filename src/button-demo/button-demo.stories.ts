import { moduleMetadata } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { CommonModule } from '@angular/common';
import { ButtonDemoComponent } from './button-demo.component';
import { ButtonModule } from '../button/button.module';

export default {
  component: ButtonDemoComponent,
  title: 'Button',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, ButtonModule]
    }),
    withKnobs,
    withA11y
  ]
};

export const basic = () => ({
  component: ButtonDemoComponent,
  props: {}
});
