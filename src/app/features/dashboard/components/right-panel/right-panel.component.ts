import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { ContextualRiskComponent } from './components/contextual-risk';
import { AssetFlowComponent } from './components/asset-flow';

@Component({
  selector: 'right-panel',
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
    ContextualRiskComponent,
    AssetFlowComponent,
  ],
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss'],
})
export class RightPanelComponent {}
