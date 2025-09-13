import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import type { RemediationAsset } from '../../../../core/types/app.types';
import { RemediationCardComponent } from '../../../../shared/components/remediation-card/remediation-card.component';

@Component({
  selector: 'central-panel',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RemediationCardComponent],
  templateUrl: './central-panel.component.html',
  styleUrls: ['./central-panel.component.scss'],
})
export class CentralPanelComponent {
  details = [
    {
      label: 'dashboard.system_details.last_scan',
      value: '2024-01-15 14:30',
    },
    {
      label: 'dashboard.system_details.firewall_status',
      value: 'Active',
    },
    {
      label: 'dashboard.system_details.antivirus_status',
      value: 'Updated',
    },
    {
      label: 'dashboard.system_details.backup_status',
      value: 'Completed',
      hasCheck: true,
    },
    {
      label: 'dashboard.system_details.ssl_certificate',
      value: 'Valid',
    },
    {
      label: 'dashboard.system_details.user_management',
      value: 'Configured',
    },
    {
      label: 'dashboard.system_details.access_control',
      value: 'Enabled',
    },
  ];

  remediationAssets: RemediationAsset[] = [
    {
      id: 'asset-a1',
      title: 'Firewall Configuration',
      type: 'Network Device',
      ipAddress: '192.168.1.1',
      description: 'Update firewall rules and access control lists',
      riskLevel: 'high',
      status: 'in_progress',
    },
    {
      id: 'asset-a2',
      title: 'Firewall Configuration',
      type: 'Network Device',
      ipAddress: '192.168.1.1',
      description: 'Update firewall rules and access control lists',
      riskLevel: 'high',
      status: 'in_progress',
    },
    {
      id: 'asset-a3',
      title: 'Firewall Configuration',
      type: 'Network Device',
      ipAddress: '192.168.1.1',
      description: 'Update firewall rules and access control lists',
      riskLevel: 'high',
      status: 'in_progress',
    },
  ];
}
