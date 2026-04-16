import { Component, HostListener, inject, OnInit, AfterViewInit } from '@angular/core';
import { MatListItem, MatNavList } from '@angular/material/list';
import { TitlePage } from './components/title-page/title-page';
import { AboutMe } from './components/about-me/about-me';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { References } from './components/references/references';
import { Contact } from './components/contact/contact';
import { AccessibilityToolbar } from './components/accessibility-toolbar/accessibility-toolbar';
import { NgClass } from '@angular/common';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { ThemeService } from './services/core/theme.service';
import { NavigationService } from './services/core/navigation.service';

@Component({
  selector: 'app-root',
  imports: [
    MatNavList,
    MatListItem,
    TitlePage,
    AboutMe,
    Skills,
    Projects,
    References,
    Contact,
    AccessibilityToolbar,
    MatButton,
    NgClass,
    MatIconButton,
    MatIcon,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, AfterViewInit {
  themeService = inject(ThemeService);
  navService = inject(NavigationService);

  sections = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'References', id: 'references' },
    { label: 'Contact', id: 'contact' }
  ];

  ngOnInit(): void {
    const fragment = window.location.hash.substring(1);
    if (fragment) {
      this.navService.setActiveSection(fragment);
      setTimeout(() => this.scrollToSection(fragment), 100);
    }
  }

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      this.navService.closeMobileMenu();

      setTimeout(() => {
        const navbar = document.querySelector('.navbar') as HTMLElement;
        const navbarHeight = navbar ? navbar.offsetHeight : 64;
        const scrollContainer = document.querySelector('mat-sidenav-content');

        if (scrollContainer) {
          const elementTop = element.offsetTop - navbarHeight;
          scrollContainer.scrollTo({ top: elementTop, behavior: 'smooth' });
        } else {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - navbarHeight, behavior: 'smooth' });
        }

        this.navService.setActiveSection(sectionId);
        history.replaceState(null, '', `#${sectionId}`);
      }, 300);
    }
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  onSidenavChange(opened: boolean): void {
    if (!opened) {
      this.navService.closeMobileMenu();
    }
  }

  private setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          this.navService.setActiveSection(id);
          if (window.location.hash !== `#${id}`) {
            history.replaceState(null, '', `#${id}`);
          }
        }
      });
    }, options);

    this.sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });
  }
}
