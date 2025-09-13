import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TooltipComponent } from '../../../../../../../shared/components/tooltip/tooltip.component';

@Component({
  selector: 'app-graph-node',
  standalone: true,
  imports: [CommonModule, TooltipComponent],
  templateUrl: './graph-node.component.html',
  styleUrls: ['./graph-node.component.scss'],
})
export class GraphNodeComponent {
  @Input() title: string = '';
  @Input() icon: string | null = null;
  @Input() customIcon: string | null = null;
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() errorIcon: boolean = false;
  @Input() userIcon: boolean = false;
  @Input() initialNode: boolean = false;
}
