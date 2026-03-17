import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'RxJS',
    'Angular Material',
    'HTML5',
    'CSS3',
    'SCSS',
    'Git',
    'REST API'
   ];
}
