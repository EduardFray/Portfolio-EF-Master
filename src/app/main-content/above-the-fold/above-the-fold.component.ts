import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [ButtonComponent, TranslatePipe],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

}
