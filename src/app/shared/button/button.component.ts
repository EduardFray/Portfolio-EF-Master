import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = 'Let\s Talk!';
  @Input() color: string = 'primary';
  @Input() textOverflow: string = 'clip';
  @Input() link: string = '';
}
