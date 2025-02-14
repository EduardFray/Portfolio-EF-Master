import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/component/header/header.component'; 
import { TranslateService } from '@ngx-translate/core';
import AOS from 'aos';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio-master';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
        this.translate.setDefaultLang('en');
        this.translate.use('en');
  }

  ngOnInit(): void {
    AOS.init({
      duration: 1200,
      offset:100,
      once: true,
      easing: 'ease-in-out'
    });
  }
}
