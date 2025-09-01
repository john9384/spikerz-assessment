import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from '../../../../core/types/app.types';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;

  @Output() onClick = new EventEmitter<Event>();

  get buttonClasses(): string {
    const classes = ['btn', `btn-${this.variant}`, `btn-${this.size}`];
    if (this.disabled) {
      classes.push('disabled');
    }
    return classes.join(' ');
  }
}
