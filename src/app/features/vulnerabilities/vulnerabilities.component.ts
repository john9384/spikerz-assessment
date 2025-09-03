import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { DetailedVulnerability, Asset } from '../../core/types/app.types';
import { SeverityLevel, RiskLevel } from '../../core/constants/app.constants';
import { ServerIconComponent } from '../../shared/components/server-icon/server-icon.component';

@Component({
  selector: 'app-vulnerabilities',
  standalone: true,
  imports: [CommonModule, TranslatePipe, ServerIconComponent],
  templateUrl: './vulnerabilities.component.html',
  styleUrls: ['./vulnerabilities.component.scss'],
})
export class VulnerabilitiesComponent {
  selectedVulnerability: DetailedVulnerability | null = null;
  showDrawer = false;

  // Mock data for development - replace with actual service calls
  vulnerabilities: DetailedVulnerability[] = [
    {
      id: '1',
      identifier: 'CVE-2024-001',
      cveId: 'CVE-2024-001',
      description: 'SQL Injection vulnerability in login form',
      extraInfo:
        'This vulnerability allows attackers to execute arbitrary SQL commands through the login form.',
      severity: 'high',
      discoveredDate: '2024-01-15',
      metadata: {
        'CVSS Score': '8.5',
        'Attack Vector': 'Network',
        Complexity: 'Low',
        'Privileges Required': 'None',
      },
      networkGraph: [
        {
          id: '1',
          name: 'Web Server',
          type: 'server',
          ipAddress: '192.168.1.10',
        },
        {
          id: '2',
          name: 'Database',
          type: 'server',
          ipAddress: '192.168.1.20',
        },
      ],
      contextualRisks: [
        { assetId: '1', assetName: 'Web Application', riskLevel: 'high' },
        { assetId: '2', assetName: 'Database Server', riskLevel: 'critical' },
      ],
    },
    {
      id: '2',
      identifier: 'CVE-2024-002',
      cveId: 'CVE-2024-002',
      description: 'Cross-Site Scripting in user input fields',
      extraInfo:
        'Reflected XSS vulnerability that could allow session hijacking.',
      severity: 'medium',
      discoveredDate: '2024-01-20',
      metadata: {
        'CVSS Score': '6.1',
        'Attack Vector': 'Reflected',
        Complexity: 'Low',
        'Privileges Required': 'None',
      },
      networkGraph: [
        {
          id: '3',
          name: 'Load Balancer',
          type: 'router',
          ipAddress: '192.168.1.5',
        },
        {
          id: '4',
          name: 'Web Server',
          type: 'server',
          ipAddress: '192.168.1.15',
        },
      ],
      contextualRisks: [
        { assetId: '3', assetName: 'Frontend App', riskLevel: 'medium' },
      ],
    },
  ];

  assets: Asset[] = [
    {
      id: '1',
      frameId: 'F001',
      name: 'Web Application Server',
      ipAddress: '192.168.1.10',
      vulnerabilities: ['1'],
      contextLogs: [
        'User login attempt from 10.0.0.5',
        'Database connection established',
        'API request processed successfully',
      ],
    },
    {
      id: '2',
      frameId: 'F002',
      name: 'Database Server',
      ipAddress: '192.168.1.20',
      vulnerabilities: ['1'],
      contextLogs: [
        'SQL query executed',
        'Connection pool maintained',
        'Backup completed successfully',
      ],
    },
  ];

  selectVulnerability(vulnerability: DetailedVulnerability): void {
    this.selectedVulnerability = vulnerability;
    this.showDrawer = true;
  }

  selectVulnerabilityFromAsset(asset: Asset): void {
    const vulnerability =
      this.vulnerabilities.find((v) => v.id === asset.vulnerabilities[0]) ||
      this.vulnerabilities[0];
    if (vulnerability) {
      this.selectVulnerability(vulnerability);
    }
  }

  closeDrawer(): void {
    this.showDrawer = false;
    this.selectedVulnerability = null;
  }

  getSeverityColor(severity: SeverityLevel): string {
    const colors = {
      low: 'var(--success-500)',
      medium: 'var(--warning-500)',
      high: 'var(--error-500)',
      critical: 'var(--error-700)',
    };
    return colors[severity] || colors.medium;
  }

  getRiskLevelColor(riskLevel: RiskLevel): string {
    const colors = {
      low: 'var(--success-500)',
      medium: 'var(--warning-500)',
      high: 'var(--error-500)',
      critical: 'var(--error-700)',
    };
    return colors[riskLevel] || colors.medium;
  }

  getRiskLevelTextColor(riskLevel: RiskLevel): string {
    const colors = {
      low: 'var(--success-700)',
      medium: 'var(--warning-700)',
      high: 'var(--error-700)',
      critical: 'var(--error-800)',
    };
    return colors[riskLevel] || colors.medium;
  }

  getMetadataEntries(metadata: Record<string, string>): [string, string][] {
    return Object.entries(metadata);
  }
}
