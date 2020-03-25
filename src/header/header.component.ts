import { Component, OnInit, Input } from '@angular/core';
import { LinkData } from '../header-link/header-link.module';

type HeaderTheme = 'primary' | 'secondary';

enum HeaderStyle {
  BASE = 'header',
  PRIMARY = 'header--primary',
  SECONDARY = 'header--secondary'
}

@Component({
  selector: 'neutron-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('homePath') homePath = '/';
  @Input('links') links: LinkData[];
  @Input('titleTheme') titleTheme: HeaderTheme = 'primary';
  @Input('linkFill') linkFill = 'center';
  @Input('linkTheme') linkTheme: HeaderTheme = 'primary';
  private _style: string[] = [HeaderStyle.BASE];

  get style() {
    return this._style.join(' ');
  }

  constructor() {}

  ngOnInit(): void {
    if (!this.titleTheme) {
      this.titleTheme = 'primary';
    }

    if (this.titleTheme === 'primary') {
      this._style.push(HeaderStyle.PRIMARY);
    } else if (this.titleTheme === 'secondary') {
      this._style.push(HeaderStyle.SECONDARY);
    }
  }
}
