import { Component, OnInit, Input } from '@angular/core';

type HeaderLinkTheme = 'primary' | 'secondary';
type HeaderFill = 'left' | 'right' | 'center' | 'ends';

enum HeaderLinkStyle {
  BASE = 'header-link',
  PRIMARY = 'header-link--primary',
  SECONDARY = 'header-link--secondary'
}

enum HeaderLinkFill {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
  ENDS = 'ends'
}

export type LinkData = {
  theme?: 'primary' | 'secondary';
  fill?: 'left' | 'right' | 'center' | 'ends';
  path: string;
  title: string;
};

@Component({
  selector: 'neutron-header-link',
  templateUrl: './header-link.component.html',
  styleUrls: ['./header-link.component.scss']
})
export class HeaderLinkComponent implements OnInit {
  @Input('theme') theme: HeaderLinkTheme = 'primary';
  @Input('fill') fill: HeaderFill = 'center';
  @Input('path') path: string;
  private _style: string[] = [HeaderLinkStyle.BASE];

  get style() {
    return this._style.join(' ');
  }

  constructor() {}

  ngOnInit(): void {
    if (!this.path) {
      throw new Error("Attribute 'path' is required");
    }

    if (!this.theme) {
      this.theme = 'primary';
    }

    if (!this.fill) {
      this.fill = 'center';
    }

    if (this.theme === 'primary') {
      this._style.push(HeaderLinkStyle.PRIMARY);
    } else if (this.theme === 'secondary') {
      this._style.push(HeaderLinkStyle.SECONDARY);
    }

    if (this.fill === 'left') {
      this._style.push(HeaderLinkFill.LEFT);
    } else if (this.fill === 'right') {
      this._style.push(HeaderLinkFill.RIGHT);
    } else if (this.fill === 'center') {
      this._style.push(HeaderLinkFill.CENTER);
    } else if (this.fill === 'ends') {
      this._style.push(HeaderLinkFill.ENDS);
    }
  }
}
