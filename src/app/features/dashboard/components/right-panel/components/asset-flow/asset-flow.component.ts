import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GraphNodeComponent } from './graph-node/graph-node.component';
import { TranslatePipe } from '../../../../../../shared/pipes/translate.pipe';

@Component({
  selector: 'asset-flow',
  standalone: true,
  imports: [CommonModule, GraphNodeComponent, TranslatePipe],
  templateUrl: './asset-flow.component.html',
  styleUrls: ['./asset-flow.component.scss'],
})
export class AssetFlowComponent {}
