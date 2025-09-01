import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display dashboard title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Dashboard');
  });

  it('should display security score card', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.score')?.textContent).toContain('85');
  });

  it('should display vulnerabilities count', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.count')?.textContent).toContain('12');
  });

  it('should display remediations count', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.count')[1]?.textContent).toContain('8');
  });

  it('should display risk level', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.risk-level')?.textContent).toContain('Medium');
  });
});
