import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  currentImage: string = './assets/images/legal-notice/arrow-white.png';

  changeToGreenArrow(){
    this.currentImage = './assets/images/legal-notice/arrow-green.png';
  }

  changeToWhiteArrow(){
    this.currentImage = './assets/images/legal-notice/arrow-white.png'
  }
}
