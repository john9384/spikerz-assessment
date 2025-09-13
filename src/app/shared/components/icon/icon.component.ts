// icon.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-icon',
  template: `<div [innerHTML]="svgIcon"></div>`,
})
export class IconComponent implements OnInit {
  @Input() src!: string;
  @Input() color: string = 'transparent';
  svgIcon: SafeHtml | null = null;

  // eslint-disable-next-line no-unused-vars
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.http.get(this.src, { responseType: 'text' }).subscribe((data) => {
      // Replace fills with Angular-bound color
      const coloredSvg = data.replace(/fill=".*?"/g, `fill=""`);
      this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(coloredSvg);
    });
  }
}
