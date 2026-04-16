import { Injectable, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  isMobile = signal<boolean>(false);
  isTablet = signal<boolean>(false);
  activeSection = signal<string>('home');
  mobileMenuOpen = signal<boolean>(false);

  constructor(private breakpointObserver: BreakpointObserver) {
    // Observe mobile breakpoints
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Small])
      .subscribe(result => {
        this.isMobile.set(result.matches);
      });

    // Observe tablet breakpoints
    this.breakpointObserver
      .observe([Breakpoints.Tablet, Breakpoints.Medium])
      .subscribe(result => {
        this.isTablet.set(result.matches);
      });
  }

  setActiveSection(section: string): void {
    this.activeSection.set(section);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(value => !value);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
