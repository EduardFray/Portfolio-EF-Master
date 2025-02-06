import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, CommonModule, TranslatePipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projects: any[] = [];

  constructor(private translate: TranslateService) {
    this.loadProjects();

    this.translate.onLangChange.subscribe(() => {
      this.loadProjects();
    });
  }

  loadProjects() {
    this.projects = [
      {
        img: './assets/images/project-images/join.png',
        name: this.translate.instant('PROJECTS.JOIN.NAME'),
        language: this.translate.instant('PROJECTS.JOIN.LANGUAGE'),
        description: this.translate.instant('PROJECTS.JOIN.DESCRIPTION'),
        livelink: 'https://eduard-fray.com/JOIN/login.html',
        githubLink: 'https://github.com/Aristotelis-Stratis/JOIN-126'
      },
      {
        img: './assets/images/project-images/pollo-loco.png',
        name: this.translate.instant('PROJECTS.POLLO_LOCO.NAME'),
        language: this.translate.instant('PROJECTS.POLLO_LOCO.LANGUAGE'),
        description: this.translate.instant('PROJECTS.POLLO_LOCO.DESCRIPTION'),
        livelink: 'https://eduard-fray.com/el-pollo-loco/index.html',
        githubLink: 'https://github.com/EduardFray/El-Pollo-Loco'
      },
      {
        img: './assets/images/project-images/pokedex.png',
        name: this.translate.instant('PROJECTS.POKEDEX.NAME'),
        language: this.translate.instant('PROJECTS.POKEDEX.LANGUAGE'),
        description: this.translate.instant('PROJECTS.POKEDEX.DESCRIPTION'),
        livelink: 'https://eduard-fray.com/Pokedex/index.html',
        githubLink: 'https://github.com/EduardFray/Pokedex'
      }
    ];
  }
}


// {
//   img: './assets/images/project-images/simple-crm.png',
//   name: 'Simple CRM',
//   language: 'Angular | Firebase',
//   description: 'In Progress',
//   livelink: 'http',
//   githubLink: ''
// },

// {
//   img: './assets/images/project-images/dabubble.png',
//   name: 'DA Bubble',
//   language: 'Angular | TypeScript | Firebase',
//   description: 'In Progress',
//   livelink: 'http',
//   githubLink: ''
// }