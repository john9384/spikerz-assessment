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
      label: 'Lorem Ipsum Dolor',
      value: '10/19/2017',
    },
    {
      label: 'Lorem Ipsum Dolor',
      value: 'Ut',
    },
    {
      label: 'Lorem Ipsum Dolor',
      value: 'Eros',
    },
    {
      label: 'Lorem Ipsum Dolor',
      value: 'Yes',
      hasCheck: true,
    },
    {
      label: 'Lorem Ipsum Dolor',
      value: 'Sit',
    },
    {
      label: 'Lorem Ipsum Dolor',
      value: 'Lorem Ipsum Dolor',
    },
    {
      label: 'Lorem Ipsum Dolor',
      value: 'Lorem Ipsum Dolor',
    },
  ];

  remediationAssets: RemediationAsset[] = [
    {
      id: 'asset-a1',
      title: 'Firewall Configuration',
      type: 'Network Device',
      description: 'Update firewall rules and access control lists',
      summary:
        'Configure inbound/outbound traffic rules, implement IP whitelisting, and set up intrusion prevention systems.',
      riskLevel: 'high',
      status: 'in_progress',
    },
  ];
}
