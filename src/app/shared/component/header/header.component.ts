import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  currentLang: string = 'en';
  flagSrc: string = './assets/images/header/british-flag.png';

  constructor(private renderer: Renderer2, private translate: TranslateService) {
    const storedLang = localStorage.getItem('selectedLanguage');
    this.currentLang = storedLang ? storedLang : 'en';
    this.translate.use(this.currentLang);
    this.updateFlag();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

  switchLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'de' : 'en';
    this.translate.use(this.currentLang);
    localStorage.setItem('selectedLanguage', this.currentLang);
    this.updateFlag();
  }

  private updateFlag() {
    this.flagSrc = this.currentLang === 'en'
      ? './assets/images/header/british-flag.png'
      : './assets/images/header/german-flag.png';
  }
}
