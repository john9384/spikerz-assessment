import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
  selector: 'central-panel',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './central-panel.component.html',
  styleUrls: ['./central-panel.component.scss'],
})
export class CentralPanelComponent {
  details = [
    {
      label: 'Lorem Ipsum Dolor',
      value: '10/19/2017',
    },
    {
      label: 'Lorem Ipsum Dolor',
      value: 'Ut',
    },
    {
      label: 'Lorem Ipsum Dolor',
      value: 'Eros',
    },
    {
      label: 'Lorem Ipsum Dolor',
      value: 'Yes',
      hasCheck: true,
    },
    {
      label: 'Lorem Ipsum Dolor',
      value: 'Sit',
    },
    {
      label: 'Lorem Ipsum Dolor',
      value: 'Lorem Ipsum Dolor',
    },
    {
      label: 'Lorem Ipsum Dolor',
      value: 'Lorem Ipsum Dolor',
    },
  ];
}
