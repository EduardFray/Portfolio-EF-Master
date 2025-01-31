import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  currentLang: string ='en';
  flagSrc: string = './assets/images/header/british-flag.png';

  constructor(private renderer: Renderer2) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

  switchLanguage() {
    if (this.currentLang === 'en') {
      this.currentLang = 'de';
      this.flagSrc = './assets/images/header/german-flag.png';
    } else {
      this.currentLang = 'en';
      this.flagSrc = './assets/images/header/british-flag.png';
    }
  }

}
