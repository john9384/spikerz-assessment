import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-graph-node',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graph-node.component.html',
  styleUrls: ['./graph-node.component.scss'],
})
export class GraphNodeComponent {
  @Input() title: string = '';
}
