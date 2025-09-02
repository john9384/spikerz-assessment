import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent],
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent implements OnInit, OnDestroy {
  isSidebarCollapsed = false;

  ngOnInit(): void {
    // Initialize component safely
  }

  ngOnDestroy(): void {
    // Clean up any subscriptions or resources
  }

  toggleSidebar(): void {
    try {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    } catch (error) {
      console.error('Error toggling sidebar:', error);
    }
  }
}
