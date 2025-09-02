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
      icon: 'https://res.cloudinary.com/ddlhom1zz/image/upload/v1716773456/BankLogos/Property_1_rubies-mfb_w04bh0.png',
      active: true,
    },
    {
      label: 'navigation.remediation',
      route: '/remediation',
      icon: 'https://res.cloudinary.com/ddlhom1zz/image/upload/v1716773456/BankLogos/Property_1_rubies-mfb_w04bh0.png',
      active: false,
    },
    {
      label: 'navigation.vulnerabilities',
      route: '/vulnerabilities',
      icon: 'https://res.cloudinary.com/ddlhom1zz/image/upload/v1716773456/BankLogos/Property_1_rubies-mfb_w04bh0.png',
      active: false,
    },
    {
      label: 'navigation.risk',
      route: '/risk',
      icon: 'https://res.cloudinary.com/ddlhom1zz/image/upload/v1716773456/BankLogos/Property_1_rubies-mfb_w04bh0.png',
      active: false,
    },
  ];

  secondaryNavigationItems: NavigationItem[] = [
    {
      label: 'navigation.profile',
      route: '/profile',
      icon: 'https://res.cloudinary.com/ddlhom1zz/image/upload/v1716773456/BankLogos/Property_1_rubies-mfb_w04bh0.png',
      active: false,
    },
    {
      label: 'navigation.notifications',
      route: '/notifications',
      icon: 'https://res.cloudinary.com/ddlhom1zz/image/upload/v1716773456/BankLogos/Property_1_rubies-mfb_w04bh0.png',
      active: false,
    },
  ];

  userProfile = {
    name: 'John Doe',
    email: 'john.doe@spikerz.com',
    avatar:
      'https://res.cloudinary.com/ddlhom1zz/image/upload/v1716773455/BankLogos/Property_1_polaris-bank_v8hwoe.png',
  };

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }

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
