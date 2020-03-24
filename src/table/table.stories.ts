import { moduleMetadata } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';

export default {
  component: TableComponent,
  title: 'Table',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule]
    }),
    withKnobs,
    withA11y
  ]
};

export const basic = () => ({
  component: TableComponent,
  props: {}
});
