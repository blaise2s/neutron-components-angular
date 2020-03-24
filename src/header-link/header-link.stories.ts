import { moduleMetadata } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { HeaderLinkComponent } from './header-link.component';
import { RouterModule } from '@angular/router';

export default {
  component: HeaderLinkComponent,
  title: 'Header Link',
  decorators: [
    moduleMetadata({
      declarations: [HeaderLinkComponent],
      imports: [
        CommonModule,
        RouterModule.forRoot([
          { path: 'recipes1', component: HeaderLinkComponent },
          { path: 'recipes2', component: HeaderLinkComponent },
          { path: 'recipes3', component: HeaderLinkComponent },
          { path: 'recipes4', component: HeaderLinkComponent },
          { path: 'recipes5', component: HeaderLinkComponent },
          { path: 'recipes6', component: HeaderLinkComponent },
          { path: 'recipes7', component: HeaderLinkComponent },
          { path: 'recipes8', component: HeaderLinkComponent },
          { path: 'iframe.html', component: HeaderLinkComponent }
        ])
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/?path=/story/header-link--basic' }
      ]
    }),
    withKnobs,
    withA11y
  ]
};

export const basic = () => ({
  template: `
    <neutron-header-link theme="primary" fill="left" [path]="'/recipes1'">Recipes</neutron-header-link>
    &nbsp;
    <neutron-header-link theme="primary" fill="right" [path]="'/recipes2'">Recipes</neutron-header-link>
    &nbsp;
    <neutron-header-link theme="primary" fill="center" [path]="'/recipes3'">Recipes</neutron-header-link>
    &nbsp;
    <neutron-header-link theme="primary" fill="ends" [path]="'/recipes4'">Recipes</neutron-header-link>
    <br />
    <br />
    <neutron-header-link theme="secondary" fill="left" [path]="'/recipes5'">Recipes</neutron-header-link>
    &nbsp;
    <neutron-header-link theme="secondary" fill="right" [path]="'/recipes6'">Recipes</neutron-header-link>
    &nbsp;
    <neutron-header-link theme="secondary" fill="center" [path]="'/recipes7'">Recipes</neutron-header-link>
    &nbsp;
    <neutron-header-link theme="secondary" fill="ends" [path]="'/recipes8'">Recipes</neutron-header-link>
  `,
  props: {}
});
