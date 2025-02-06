import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

  testimonialsContent: any[] = [];

  currentIndex = 0;
  isChanging = false;

  constructor(private translate: TranslateService) {
    this.loadTestimonials();
    
    this.translate.onLangChange.subscribe(() => {
      this.loadTestimonials();
    });
  }

  loadTestimonials() {
    this.testimonialsContent = [
      {
        text: this.translate.instant('TESTIMONIALS.FIRST.TEXT'),
        image: './assets/images/testimonials/first-person.png',
        name: this.translate.instant('TESTIMONIALS.FIRST.NAME')
      },
      {
        text: this.translate.instant('TESTIMONIALS.SECOND.TEXT'),
        image: './assets/images/testimonials/second-person.png',
        name: this.translate.instant('TESTIMONIALS.SECOND.NAME')
      },
      {
        text: this.translate.instant('TESTIMONIALS.THIRD.TEXT'),
        image: './assets/images/testimonials/third-person.png',
        name: this.translate.instant('TESTIMONIALS.THIRD.NAME')
      }
    ];
  }

  nextTestimonial() {
    this.isChanging = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.testimonialsContent.length;
      this.isChanging = false;
    }, 200);
  }

  prevTestimonial() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.testimonialsContent.length - 1;
    }
  }

  setTestimonial(i: number) {
    this.isChanging = true;
    setTimeout(() => {
      this.currentIndex = i;
      this.isChanging = false;
    }, 200);
  }
}
