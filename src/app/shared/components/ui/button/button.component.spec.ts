import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { Component } from '@angular/core';

@Component({
  template: `
    <app-button
      [variant]="variant"
      [size]="size"
      [disabled]="disabled"
      (onClick)="handleClick($event)"
    >
      Test Button
    </app-button>
  `,
  standalone: true,
  imports: [ButtonComponent],
})
class TestHostComponent {
  variant = 'primary';
  size = 'md';
  disabled = false;
  clickCount = 0;

  handleClick(event: Event) {
    this.clickCount++;
  }
}

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let hostComponent: TestHostComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent, TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values', () => {
    expect(component.variant).toBe('primary');
    expect(component.size).toBe('md');
    expect(component.disabled).toBe(false);
  });

  it('should generate correct button classes', () => {
    component.variant = 'secondary';
    component.size = 'lg';

    expect(component.buttonClasses).toBe('btn btn-secondary btn-lg');
  });

  it('should emit click event', () => {
    const button = hostFixture.nativeElement.querySelector('button');
    button.click();

    expect(hostComponent.clickCount).toBe(1);
  });

  it('should apply disabled state', () => {
    hostComponent.disabled = true;
    hostFixture.detectChanges();

    const button = hostFixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(true);
  });

  it('should apply different variants', () => {
    const variants = ['primary', 'secondary', 'ghost', 'danger'];

    variants.forEach((variant) => {
      hostComponent.variant = variant;
      hostFixture.detectChanges();

      const button = hostFixture.nativeElement.querySelector('button');
      expect(button.classList.contains(`btn-${variant}`)).toBe(true);
    });
  });

  it('should apply different sizes', () => {
    const sizes = ['sm', 'md', 'lg'];

    sizes.forEach((size) => {
      hostComponent.size = size;
      hostFixture.detectChanges();

      const button = hostFixture.nativeElement.querySelector('button');
      expect(button.classList.contains(`btn-${size}`)).toBe(true);
    });
  });
});
