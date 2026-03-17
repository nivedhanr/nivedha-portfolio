import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  activeSection: string = 'home';
  sections = ['home', 'about', 'skills', 'experience', 'contact'];

  ngOnInit() {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      this.activeSection = hash;
    }
  }


  scrollTo(section: string) {
    this.activeSection = section;
    const element = document.getElementById(section);
  
    if (!element) return;
  
    const target = element.offsetTop;
    const start = window.pageYOffset;
    const distance = target - start;
    const duration = 1200; // 🔥 increase this (1000–1500 = slower)
  
    let startTime: number | null = null;
  
    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
  
      const progress = Math.min(timeElapsed / duration, 1);
  
      // ease-in-out (smooth + slow)
      const ease = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
  
      window.scrollTo(0, start + distance * ease);
  
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };
  
    requestAnimationFrame(animation);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition = window.scrollY + 100; // offset for navbar

    for (let section of this.sections) {
      const element = document.getElementById(section);

      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          this.activeSection = section;
        }
      }
    }
  }
}