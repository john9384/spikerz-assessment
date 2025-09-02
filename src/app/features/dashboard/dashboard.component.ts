import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CentralPanelComponent } from './components/central-panel/central-panel.component';
import { RightPanelComponent } from './components/right-panel/right-panel.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CentralPanelComponent, RightPanelComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {}
