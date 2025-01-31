import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

  testimonialsContent = [
    {
      text: 'Eduard was always dependable and kept the team on track. His ability to focus on the bigger picture while still handling the details helped us make steady progress. He also brought a great sense of humor to the group, which made working together much more enjoyable.',
      image: './assets/images/testimonials/first-person.png',
      name: 'J. Lohmann - Team Partner'
    },
    {
      text: 'Eduard made teamwork easy. He communicated clearly, stayed reliable throughout, and always had a positive attitude.',
      image: './assets/images/testimonials/second-person.png',
      name: 'T. Becker - Team Partner'
    },
    {
      text: 'Working with Eduard was a genuinely good experience. He kept everyone motivated and made sure we stayed on course without losing sight of the team’s dynamic. His approachable nature made him a great teammate.',
      image: './assets/images/testimonials/third-person.png',
      name: 'N. Gruber'
    }
  ];

  currentIndex = 0;

  isChanging = false;

nextTestimonial() {
    this.isChanging = true; // Start fade-out
    setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.testimonialsContent.length;
        this.isChanging = false; // Start fade-in
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
    this.isChanging = true; // Start fade-out
    setTimeout(() => {
        this.currentIndex = i; // Set to clicked dot index
        this.isChanging = false; // Start fade-in
    }, 200); 
  }

}
