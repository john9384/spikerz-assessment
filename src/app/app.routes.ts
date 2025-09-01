import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
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
      import('./features/vulnerabilities/vulnerabilities.component').then(
        (m) => m.VulnerabilitiesComponent
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
    redirectTo: '/dashboard',
  },
];
