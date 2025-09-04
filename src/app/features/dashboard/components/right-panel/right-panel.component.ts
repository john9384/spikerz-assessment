import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AssetFlowComponent } from './components/asset-flow';
import { ContextualRiskComponent } from './components/contextual-risk';

@Component({
  selector: 'right-panel',
  standalone: true,
  imports: [CommonModule, ContextualRiskComponent, AssetFlowComponent],
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss'],
})
export class RightPanelComponent {}
