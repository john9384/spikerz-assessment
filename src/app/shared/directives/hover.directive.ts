import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Output,
  EventEmitter,
  signal,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true,
})
export class HoverDirective {
  @Input() hoverClass: string = 'hover-active';
  @Input() hoverDelay: number = 0;
  @Input() hoverDisabled: boolean = false;

  @Output() hoverStart = new EventEmitter<void>();
  @Output() hoverEnd = new EventEmitter<void>();

  private isHovering = signal(false);
  private hoverTimeout: any;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.hoverDisabled) return;

    if (this.hoverDelay > 0) {
      this.hoverTimeout = setTimeout(() => {
        this.activateHover();
      }, this.hoverDelay);
    } else {
      this.activateHover();
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.hoverDisabled) return;

    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = null;
    }

    this.deactivateHover();
  }

  private activateHover(): void {
    if (!this.isHovering()) {
      this.isHovering.set(true);
      this.el.nativeElement.classList.add(this.hoverClass);
      this.hoverStart.emit();
    }
  }

  private deactivateHover(): void {
    if (this.isHovering()) {
      this.isHovering.set(false);
      this.el.nativeElement.classList.remove(this.hoverClass);
      this.hoverEnd.emit();
    }
  }

  get hovering(): boolean {
    return this.isHovering();
  }
}
