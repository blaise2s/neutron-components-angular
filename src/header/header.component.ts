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
  @Input('title') title: string;
  @Input('homePath') homePath = '/';
  @Input('links') links: LinkData[];
  @Input('theme') theme: HeaderTheme = 'primary';
  @Input('linkFill') linkFill = 'center';
  private _style: string[] = [HeaderStyle.BASE];

  get style() {
    return this._style.join(' ');
  }

  constructor() {}

  ngOnInit(): void {
    if (!this.title) {
      throw new Error("Attribute 'title' is required");
    }

    if (!this.theme) {
      this.theme = 'primary';
    }

    if (this.theme === 'primary') {
      this._style.push(HeaderStyle.PRIMARY);
    } else if (this.theme === 'secondary') {
      this._style.push(HeaderStyle.SECONDARY);
    }
  }
}
