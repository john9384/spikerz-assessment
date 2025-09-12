import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerIconComponent } from '../../../../../../../shared/components/server-icon/server-icon.component';

export interface TooltipSection {
  label: string;
  ipAddress?: string;
  text: string;
  highlights?: {
    text: string;
    color: 'orange' | 'green' | 'blue' | 'purple';
  }[];
  tags?: string[];
}

@Component({
  selector: 'app-node-tooltip-card',
  standalone: true,
  imports: [CommonModule, ServerIconComponent],
  templateUrl: './node-tooltip-card.component.html',
  styleUrls: ['./node-tooltip-card.component.scss'],
})
export class NodeTooltipCardComponent {
  @Input() title: string = '';
  @Input() icon: string = 'dns'; // Material icon name
  @Input() sections: TooltipSection[] = [];
  @Input() ipAddress: string | null = null;
}
