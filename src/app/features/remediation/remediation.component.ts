import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-remediation',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './remediation.component.html',
  styleUrls: ['./remediation.component.scss'],
})
export class RemediationComponent {}
