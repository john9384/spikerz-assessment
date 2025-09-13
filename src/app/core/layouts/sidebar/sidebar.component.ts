import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { NavigationItem } from '../../types/app.types';
import { IconComponent } from '../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe, IconComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  @Input() isCollapsed = false;
  @Output() toggleSidebar = new EventEmitter<void>();

  currentRoute = '';

  // eslint-disable-next-line no-unused-vars
  constructor(private router: Router) {}

  navigationItems: NavigationItem[] = [
    {
      label: 'navigation.dashboard',
      route: '/dashboard',
      icon: 'assets/icons/dashboard.svg',
      active: false,
      functional: false,
    },
    {
      label: 'navigation.risk',
      route: '/risk',
      icon: 'assets/icons/alert.svg',
      active: false,
      functional: false,
    },
    {
      label: 'navigation.remediation',
      route: '/remediation',
      icon: 'assets/icons/cuboid.svg',
      active: false,
      functional: false,
    },
    {
      label: 'navigation.vulnerabilities',
      route: '/vulnerabilities',
      icon: 'assets/icons/vulnerability.svg',
      active: true,
      functional: true,
    },

    {
      label: 'navigation.link1',
      route: '/link1',
      icon: 'assets/icons/plug.svg',
      active: false,
      functional: false,
    },
    {
      label: 'navigation.link2',
      route: '/link2',
      icon: 'assets/icons/doc.svg',
      active: false,
      functional: false,
    },
    {
      label: 'navigation.link3',
      route: '/link3',
      icon: 'assets/icons/ladder.svg',
      active: false,
      functional: false,
    },
  ];

  secondaryNavigationItems: NavigationItem[] = [
    {
      label: 'navigation.settings',
      route: '/profile',
      icon: 'assets/icons/setting.svg',
      active: false,
      functional: false,
    },
    {
      label: 'navigation.notifications',
      route: '/notifications',
      icon: 'assets/icons/notification.svg',
      active: false,
      functional: false,
    },
  ];

  userProfile = {
    name: 'John Doe',
    email: 'john.doe@spikerz.com',
    avatar:
      'https://res.cloudinary.com/ddlhom1zz/image/upload/v1716773455/BankLogos/Property_1_polaris-bank_v8hwoe.png',
  };

  ngOnInit(): void {
    // Initialize component safely
  }

  ngOnDestroy(): void {
    // Clean up any subscriptions or resources
  }

  onToggleSidebar(): void {
    try {
      this.toggleSidebar.emit();
    } catch (error) {
      // eslint-disable-next-line no-undef
      console.error('Error emitting sidebar toggle:', error);
    }
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

  // eslint-disable-next-line no-undef
  onNavigationClick(item: NavigationItem, event: Event): void {
    event.preventDefault();

    if (item.functional) {
      this.router.navigate([item.route]);
    }
    // If not functional, do nothing - no navigation occurs
  }
}
