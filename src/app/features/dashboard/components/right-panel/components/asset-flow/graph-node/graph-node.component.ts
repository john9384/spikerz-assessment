import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
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
}
