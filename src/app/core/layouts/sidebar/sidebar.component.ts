import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { NavigationItem } from '../../types/app.types';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() isCollapsed = false;
  @Output() toggleSidebar = new EventEmitter<void>();

  navigationItems: NavigationItem[] = [
    {
      label: 'navigation.dashboard',
      route: '/dashboard',
      icon: 'dashboard',
    },
    {
      label: 'navigation.remediation',
      route: '/remediation',
      icon: 'security',
    },
    {
      label: 'navigation.vulnerabilities',
      route: '/vulnerabilities',
      icon: 'bug_report',
    },
    {
      label: 'navigation.risk',
      route: '/risk',
      icon: 'warning',
    },
    {
      label: 'navigation.settings',
      route: '/settings',
      icon: 'settings',
    },
  ];

  userProfile = {
    name: 'John Doe',
    email: 'john.doe@spikerz.com',
    avatar: '👤',
  };

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }

  getIconClass(icon: string | undefined): string {
    if (!icon) return 'default-icon';

    const iconMap: Record<string, string> = {
      dashboard: 'dashboard-icon',
      security: 'security-icon',
      bug_report: 'bug-icon',
      warning: 'warning-icon',
      settings: 'settings-icon',
    };
    return iconMap[icon] || 'default-icon';
  }
}
