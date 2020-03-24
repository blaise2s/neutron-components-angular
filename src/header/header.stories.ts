import { moduleMetadata } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import {
  HeaderLinkComponent,
  LinkData
} from '../header-link/header-link.component';

export default {
  component: HeaderComponent,
  title: 'Header',
  decorators: [
    moduleMetadata({
      declarations: [HeaderLinkComponent],
      imports: [
        CommonModule,
        RouterModule.forRoot([
          { path: 'iframe.html', component: HeaderComponent },
          { path: 'fitness', component: HeaderComponent },
          { path: 'nutrition', component: HeaderComponent },
          { path: 'recipes', component: HeaderComponent },
          { path: 'health', component: HeaderComponent },
          { path: 'wellness', component: HeaderComponent },
          { path: 'about', component: HeaderComponent },
          { path: 'contact', component: HeaderComponent }
        ])
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/?path=/story/header--basic' }
      ]
    }),
    withKnobs,
    withA11y
  ]
};

const links: LinkData[] = [
  { title: 'Fitness', path: '/fitness' },
  { title: 'Nutrition', path: '/nutrition' },
  { title: 'Recipes', path: '/recipes' },
  { title: 'Health', path: '/health' },
  { title: 'Wellness', path: '/wellness' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' }
];

export const basic = () => ({
  component: HeaderComponent,
  props: {
    title: 'Fitrition',
    links
  }
});
