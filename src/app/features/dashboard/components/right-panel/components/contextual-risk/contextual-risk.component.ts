import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServerIconComponent } from '../../../../../../shared/components/server-icon';

@Component({
  selector: 'app-contextual-risk',
  standalone: true,
  imports: [CommonModule, ServerIconComponent],
  templateUrl: './contextual-risk.component.html',
  styleUrls: ['./contextual-risk.component.scss'],
})
export class ContextualRiskComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    // Initialize component safely
  }

  ngOnDestroy(): void {
    // Clean up any subscriptions or resources
  }
}
