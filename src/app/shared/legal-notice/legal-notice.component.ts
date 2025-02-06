import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  currentImage: string = './assets/images/legal-notice/arrow-white.png';

  changeToGreenArrow(){
    this.currentImage = './assets/images/legal-notice/arrow-green.png';
  }

  changeToWhiteArrow(){
    this.currentImage = './assets/images/legal-notice/arrow-white.png'
  }

}
