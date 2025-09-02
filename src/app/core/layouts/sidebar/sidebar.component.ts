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
  isCollapsed = false;

  onToggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  navigationItems: NavigationItem[] = [
    {
      label: 'navigation.dashboard',
      route: '/dashboard',
      icon: 'dashboard',
      active: true,
    },
    {
      label: 'navigation.remediation',
      route: '/remediation',
      icon: 'security',
      active: false,
    },
    {
      label: 'navigation.vulnerabilities',
      route: '/vulnerabilities',
      icon: 'bug_report',
      active: false,
    },
    {
      label: 'navigation.risk',
      route: '/risk',
      icon: 'warning',
      active: false,
    },
  ];

  secondaryNavigationItems: NavigationItem[] = [
    {
      label: 'navigation.profile',
      route: '/profile',
      icon: 'person',
      active: false,
    },
    {
      label: 'navigation.notifications',
      route: '/notifications',
      icon: 'notifications',
      active: false,
    },
  ];

  userProfile = {
    name: 'John Doe',
    email: 'john.doe@spikerz.com',
    avatar:
      'https://res.cloudinary.com/ddlhom1zz/image/upload/v1716773455/BankLogos/Property_1_polaris-bank_v8hwoe.png',
  };

  getIconClass(icon: string | undefined): string {
    if (!icon) return 'default-icon';

    const iconMap: Record<string, string> = {
      dashboard: 'assets/icons/dashboard.svg',
      security: 'assets/icons/dashboard.svg',
      bug_report: 'assets/icons/dashboard.svg',
      warning: 'assets/icons/dashboard.svg',
      settings: 'assets/icons/dashboard.svg',
    };
    return iconMap[icon] || 'default-icon';
  }
}
