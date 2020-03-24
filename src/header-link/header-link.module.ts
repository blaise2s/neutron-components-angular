import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLinkComponent, LinkData } from './header-link.component';
import { RouterModule } from '@angular/router';

export { HeaderLinkComponent, LinkData };

@NgModule({
  declarations: [HeaderLinkComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderLinkComponent]
})
export class HeaderLinkModule {}
