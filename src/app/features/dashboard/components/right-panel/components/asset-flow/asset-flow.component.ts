import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GraphNodeComponent } from './graph-node/graph-node.component';
import { TranslatePipe } from '../../../../../../shared/pipes/translate.pipe';
import {
  NodeTooltipCardComponent,
  type TooltipSection,
} from './node-tooltip-card/node-tooltip-card.component';

@Component({
  selector: 'asset-flow',
  standalone: true,
  imports: [
    CommonModule,
    GraphNodeComponent,
    TranslatePipe,
    NodeTooltipCardComponent,
  ],
  templateUrl: './asset-flow.component.html',
  styleUrls: ['./asset-flow.component.scss'],
})
export class AssetFlowComponent {
  tooltipSections: Record<string, TooltipSection[]> = {
    firewall: [
      {
        label: 'Security Policy',
        values: [
          {
            type: 'text',
            value: 'Active Rules',
          },
          {
            type: 'orange-text',
            value: 'Blocked Attempts',
          },
          { type: 'ip', value: '1.2.3.4' },
          {
            type: 'text-ip',
            value: 'Allowed IP Range',
          },
        ],
      },
    ],
    loadBalancer: [
      {
        label: 'Load Distribution',
        values: [
          {
            type: 'text',
            value: 'Active Connections',
          },
          { type: 'ip', value: '1.2.3.4' },
          {
            type: 'text-ip',
            value: 'Health Status',
          },
        ],
      },
    ],
    webServer: [
      {
        label: 'Web Services',
        values: [
          {
            type: 'text',
            value: 'Running Services',
          },
          { type: 'ip', value: '1.2.3.4' },
          {
            type: 'text-ip',
            value: 'SSL Certificate',
          },
        ],
      },
      {
        label: 'Load Distribution',
        values: [
          {
            type: 'text',
            value: 'Active Connections',
          },
          { type: 'ip', value: '1.2.3.4' },
          {
            type: 'text-ip',
            value: 'Health Status',
          },
        ],
      },
    ],
    apiGateway: [
      {
        label: 'API Management',
        values: [
          {
            type: 'text',
            value: 'Active Endpoints',
          },
          { type: 'ip', value: '1.2.3.4' },
          {
            type: 'text-ip',
            value: 'Auth Tokens',
          },
        ],
      },
    ],
    database: [
      {
        label: 'Database Services',
        values: [
          { type: 'text', value: 'Connection Pool' },
          { type: 'ip', value: '1.2.3.4' },
          { type: 'text-ip', value: 'Backup Status' },
        ],
      },
    ],
  };

  getTooltipSections(node: string) {
    return this.tooltipSections[node as keyof typeof this.tooltipSections];
  }
}
