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
        label: 'Lorem',
        values: [
          { type: 'text', value: 'Loremipsum' },
          { type: 'orange-text', value: 'Loremipsum' },
          { type: 'ip', value: '1.2.3.4' },
          { type: 'text-ip', value: 'Lorem 1234,5678' },
        ],
      },
    ],
    loadBalancer: [
      {
        label: 'Lorem',
        values: [
          { type: 'text', value: 'Loremipsum' },
          { type: 'ip', value: '1.2.3.4' },
          { type: 'text-ip', value: 'Lorem 1234,5678' },
        ],
      },
    ],
    webServer: [
      {
        label: 'Lorem',
        values: [
          { type: 'text', value: 'Loremipsum' },
          { type: 'ip', value: '1.2.3.4' },
          { type: 'text-ip', value: 'Lorem 1234,5678' },
        ],
      },
    ],
    apiGateway: [
      {
        label: 'Lorem',
        values: [
          { type: 'text', value: 'Loremipsum' },
          { type: 'ip', value: '1.2.3.4' },
          { type: 'text-ip', value: 'Lorem 1234,5678' },
        ],
      },
    ],
  };

  getTooltipSections(node: string) {
    return this.tooltipSections[node as keyof typeof this.tooltipSections];
  }
}
