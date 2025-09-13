import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/vulnerabilities',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'remediation',
    loadComponent: () =>
      import('./features/remediation/remediation.component').then(
        (m) => m.RemediationComponent
      ),
  },
  {
    path: 'vulnerabilities',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'risk',
    loadComponent: () =>
      import('./features/risk/risk.component').then((m) => m.RiskComponent),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./features/settings/settings.component').then(
        (m) => m.SettingsComponent
      ),
  },
  {
    path: '**',
    redirectTo: '/vulnerabilities',
  },
];
