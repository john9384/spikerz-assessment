import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-server-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server-icon.component.html',
  styleUrls: ['./server-icon.component.scss'],
})
export class ServerIconComponent {
  @Input() small = false;
}
