import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { ServerIconComponent } from '../../shared/components/ui/server-icon';

@Component({
  selector: 'app-remediation',
  standalone: true,
  imports: [CommonModule, TranslatePipe, ServerIconComponent],
  templateUrl: './remediation.component.html',
  styleUrls: ['./remediation.component.scss'],
})
export class RemediationComponent {}
