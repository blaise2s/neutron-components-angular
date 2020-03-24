import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderLinkModule } from '../header-link/header-link.module';
import { RouterModule } from '@angular/router';

export { HeaderComponent };

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, HeaderLinkModule],
  exports: [HeaderComponent]
})
export class HeaderModule {}
