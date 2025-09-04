import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { ServerIconComponent } from '../../shared/components/ui/server-icon';

interface RemediationAsset {
  id: string;
  title: string;
  type: string;
  description: string;
  details?: string;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  status: 'pending' | 'in_progress' | 'completed';
}

interface RemediationTechnique {
  id: string;
  name: string;
  description: string;
  assets: RemediationAsset[];
  priority: number;
  estimatedTime: string;
}

@Component({
  selector: 'app-remediation',
  standalone: true,
  imports: [CommonModule, TranslatePipe, ServerIconComponent],
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
          details: 'Configure inbound/outbound traffic rules, implement IP whitelisting, and set up intrusion prevention systems.',
          riskLevel: 'high',
          status: 'in_progress'
        },
        {
          id: 'asset-a2',
          title: 'VPN Access Management',
          type: 'Authentication Service',
          description: 'Review and update VPN user access permissions',
          details: 'Audit current VPN users, implement multi-factor authentication, and establish connection logging.',
          riskLevel: 'medium',
          status: 'pending'
        }
      ]
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
          description: 'Perform automated security scanning of application code',
          details: 'Run SAST tools, identify SQL injection vulnerabilities, check for XSS patterns, and review authentication mechanisms.',
          riskLevel: 'critical',
          status: 'in_progress'
        },
        {
          id: 'asset-b2',
          title: 'Dependency Update',
          type: 'Package Manager',
          description: 'Update vulnerable third-party dependencies',
          details: 'Identify outdated packages with known CVEs, test compatibility, and implement secure versions across development and production environments.',
          riskLevel: 'high',
          status: 'completed'
        }
      ]
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
          details: 'Configure transparent data encryption, encrypt backup files, and implement key rotation policies.',
          riskLevel: 'medium',
          status: 'pending'
        },
        {
          id: 'asset-c2',
          title: 'File System Security',
          type: 'Storage',
          description: 'Secure file access and implement encryption',
          details: 'Set proper file permissions, implement file-level encryption for sensitive documents, and audit file access logs.',
          riskLevel: 'low',
          status: 'in_progress'
        }
      ]
    }
  ];
}
