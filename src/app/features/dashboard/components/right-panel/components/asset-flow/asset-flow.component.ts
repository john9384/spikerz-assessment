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
        text: 'Loremipsum Loremipsum',
        highlights: [{ text: 'Lorem', color: 'orange' }],
        tags: ['1.2.3.4', 'Loremipsum', '1.2.3.4', 'Lorem 1234,5678'],
      },
    ],
    loadBalancer: [
      {
        label: 'Lorem',
        text: 'Loremipsum Loremipsum',
        highlights: [{ text: 'Lorem', color: 'orange' }],
        tags: ['1.2.3.4', 'Loremipsum', '1.2.3.4', 'Lorem 1234,5678'],
      },
    ],
    webServer: [
      {
        label: 'Lorem',
        text: 'Loremipsum Loremipsum',
        highlights: [{ text: 'Lorem', color: 'orange' }],
        tags: ['1.2.3.4', 'Loremipsum', '1.2.3.4', 'Lorem 1234,5678'],
      },
    ],
    apiGateway: [
      {
        label: 'Lorem',
        text: 'Loremipsum Loremipsum',
        highlights: [{ text: 'Lorem', color: 'orange' }],
        tags: ['1.2.3.4', 'Loremipsum', '1.2.3.4', 'Lorem 1234,5678'],
      },
    ],
  };

  getTooltipSections(node: string) {
    return this.tooltipSections[node as keyof typeof this.tooltipSections];
  }
}
