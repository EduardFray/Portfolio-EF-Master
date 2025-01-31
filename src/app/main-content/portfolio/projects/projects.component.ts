import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  @Input() projectsTest = {
    img: './assets/images/project-images/join.png',
    name: 'Join',
    language: 'JavaScript | HTML | CSS | Firebase',
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    livelink: 'http',
    githubLink: ''
  }

  @Input() reverseLayout: boolean =  false;

}
