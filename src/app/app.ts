import { Component } from '@angular/core';
import { AppLayoutComponent } from './core/layouts/app-layout/app-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppLayoutComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = 'spikerz';
}
