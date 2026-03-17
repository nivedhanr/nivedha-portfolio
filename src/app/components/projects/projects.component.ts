import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent  {
  projects = [
    {
     name:'Low Code Platform',
     desc:'SaaS based low code/no code application built using Angular and RxJS.'
    },
    {
     name:'Dynamic Form Builder',
     desc:'Created reusable dynamic form components using Reactive Forms.'
    },
    {
     name:'UI Component Library',
     desc:'Developed reusable Angular Material UI components.'
    }
   ];
}
