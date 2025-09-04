import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import type { RemediationTechnique } from '../../core/types/app.types';
import { RemediationCardComponent } from '../../shared/components/remediation-card/remediation-card.component';

@Component({
  selector: 'app-remediation',
  standalone: true,
  imports: [CommonModule, RemediationCardComponent],
  templateUrl: './remediation.component.html',
  styleUrls: ['./remediation.component.scss'],
})
export class RemediationComponent {
  remediationTechniques: RemediationTechnique[] = [
    {
      id: 'technique-a',
      name: 'remediation technique A',
      description: 'Network Security Hardening and Access Control',
      priority: 1,
      estimatedTime: '2-3 hours',
      assets: [
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
        {
          id: 'asset-a2',
          title: 'VPN Access Management',
          type: 'Authentication Service',
          description: 'Review and update VPN user access permissions',
          summary:
            'Audit current VPN users, implement multi-factor authentication, and establish connection logging.',
          riskLevel: 'medium',
          status: 'pending',
        },
      ],
    },
    {
      id: 'technique-b',
      name: 'remediation technique B',
      description: 'Application Security and Code Review',
      priority: 2,
      estimatedTime: '4-6 hours',
      assets: [
        {
          id: 'asset-b1',
          title: 'Code Vulnerability Scan',
          type: 'Application',
          description:
            'Perform automated security scanning of application code',
          summary:
            'Run SAST tools, identify SQL injection vulnerabilities, check for XSS patterns, and review authentication mechanisms.',
          riskLevel: 'critical',
          status: 'in_progress',
        },
        {
          id: 'asset-b2',
          title: 'Dependency Update',
          type: 'Package Manager',
          description: 'Update vulnerable third-party dependencies',
          summary:
            'Identify outdated packages with known CVEs, test compatibility, and implement secure versions across development and production environments.',
          riskLevel: 'high',
          status: 'completed',
        },
      ],
    },
    {
      id: 'technique-c',
      name: 'remediation technique C',
      description: 'Data Protection and Encryption',
      priority: 3,
      estimatedTime: '3-4 hours',
      assets: [
        {
          id: 'asset-c1',
          title: 'Database Encryption',
          type: 'Database',
          description: 'Implement encryption for sensitive data at rest',
          summary:
            'Configure transparent data encryption, encrypt backup files, and implement key rotation policies.',
          riskLevel: 'medium',
          status: 'pending',
        },
        {
          id: 'asset-c2',
          title: 'File System Security',
          type: 'Storage',
          description: 'Secure file access and implement encryption',
          summary:
            'Set proper file permissions, implement file-level encryption for sensitive documents, and audit file access logs.',
          riskLevel: 'low',
          status: 'in_progress',
        },
      ],
    },
  ];
}
