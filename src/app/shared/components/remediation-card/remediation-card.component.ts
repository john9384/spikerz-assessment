import { CommonModule } from '@angular/common';
import { ServerIconComponent } from '../server-icon/server-icon.component';
import { Component, Input } from '@angular/core';
import type { RemediationAsset } from '../../../core/types/app.types';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-remediation-card',
  standalone: true,
  imports: [CommonModule, TranslatePipe, ServerIconComponent],
  templateUrl: './remediation-card.component.html',
  styleUrls: ['./remediation-card.component.scss'],
})
export class RemediationCardComponent {
  @Input() remediation!: RemediationAsset;
}
