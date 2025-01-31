import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
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
