import {
  Component,
  Input,
  TemplateRef,
  ViewChild,
  signal,
  computed,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  @Input() text = signal('');
  @Input() template: TemplateRef<unknown> | null = null;
  @Input() position = 'top';
  @Input() delay = signal(500);
  @Input() disabled = signal(false);
  @Input() tooltipClass = signal('');

  @ViewChild('tooltip', { static: true }) tooltip!: ElementRef;

  private isVisibleSignal = signal(false);

  get isVisible() {
    return this.isVisibleSignal.asReadonly();
  }

  get positionClass() {
    return `tooltip--${this.position}`;
  }

  get tooltipStyle() {
    return computed(() => {
      if (this.tooltipClass()) {
        return `tooltip-container--${this.tooltipClass()}`;
      }
      return '';
    });
  }

  show(): void {
    if (this.disabled()) return;
    this.isVisibleSignal.set(true);
  }

  hide(): void {
    this.isVisibleSignal.set(false);
  }

  toggle(): void {
    if (this.isVisibleSignal()) {
      this.hide();
    } else {
      this.show();
    }
  }
}
