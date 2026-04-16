import { Injectable, signal, effect } from '@angular/core';

export interface AccessibilitySettings {
  fontSize: number; // 100 is default (percentage)
  highContrast: boolean;
  linkHighlight: boolean;
  focusIndicator: boolean;
  enhancedReadability: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AccessibilityService {
  private readonly STORAGE_KEY = 'accessibility-settings';
  private readonly MIN_FONT_SIZE = 80;
  private readonly MAX_FONT_SIZE = 150;
  private readonly FONT_STEP = 10;

  // Signals for accessibility settings
  fontSize = signal<number>(100);
  highContrast = signal<boolean>(false);
  linkHighlight = signal<boolean>(false);
  focusIndicator = signal<boolean>(false);
  enhancedReadability = signal<boolean>(false);
  toolbarOpen = signal<boolean>(false);

  constructor() {
    // Load saved settings
    this.loadSettings();

    // Apply settings when they change
    effect(() => {
      this.applyFontSize(this.fontSize());
    });

    effect(() => {
      this.applyHighContrast(this.highContrast());
    });

    effect(() => {
      this.applyLinkHighlight(this.linkHighlight());
    });

    effect(() => {
      this.applyFocusIndicator(this.focusIndicator());
    });

    effect(() => {
      this.applyEnhancedReadability(this.enhancedReadability());
    });
  }

  increaseFontSize(): void {
    const current = this.fontSize();
    if (current < this.MAX_FONT_SIZE) {
      this.fontSize.set(current + this.FONT_STEP);
      this.saveSettings();
    }
  }

  decreaseFontSize(): void {
    const current = this.fontSize();
    if (current > this.MIN_FONT_SIZE) {
      this.fontSize.set(current - this.FONT_STEP);
      this.saveSettings();
    }
  }

  resetFontSize(): void {
    this.fontSize.set(100);
    this.saveSettings();
  }

  toggleHighContrast(): void {
    this.highContrast.update(value => !value);
    this.saveSettings();
  }

  toggleLinkHighlight(): void {
    this.linkHighlight.update(value => !value);
    this.saveSettings();
  }

  toggleEnhancedReadability(): void {
    this.enhancedReadability.update(value => !value);
    this.saveSettings();
  }

  toggleToolbar(): void {
    this.toolbarOpen.update(value => !value);
  }

  resetAllSettings(): void {
    this.fontSize.set(100);
    this.highContrast.set(false);
    this.linkHighlight.set(false);
    this.focusIndicator.set(false);
    this.enhancedReadability.set(false);
    this.saveSettings();
  }

  private applyFontSize(size: number): void {
    document.documentElement.style.setProperty('--accessibility-font-size', `${size}`);
  }

  private applyHighContrast(enabled: boolean): void {
    if (enabled) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }

  private applyLinkHighlight(enabled: boolean): void {
    if (enabled) {
      document.body.classList.add('highlight-links');
    } else {
      document.body.classList.remove('highlight-links');
    }
  }

  private applyFocusIndicator(enabled: boolean): void {
    if (enabled) {
      document.body.classList.add('focus-indicator');
    } else {
      document.body.classList.remove('focus-indicator');
    }
  }

  private applyEnhancedReadability(enabled: boolean): void {
    if (enabled) {
      document.body.classList.add('increased-spacing');
      document.body.classList.add('readable-font');
    } else {
      document.body.classList.remove('increased-spacing');
      document.body.classList.remove('readable-font');
    }
  }

  private saveSettings(): void {
    const settings: AccessibilitySettings = {
      fontSize: this.fontSize(),
      highContrast: this.highContrast(),
      linkHighlight: this.linkHighlight(),
      focusIndicator: this.focusIndicator(),
      enhancedReadability: this.enhancedReadability()
    };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(settings));
  }

  private loadSettings(): void {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      try {
        const settings: AccessibilitySettings = JSON.parse(saved);
        this.fontSize.set(settings.fontSize);
        this.highContrast.set(settings.highContrast);
        this.linkHighlight.set(settings.linkHighlight);
        this.focusIndicator.set(settings.focusIndicator);
        this.enhancedReadability.set(settings.enhancedReadability);
      } catch (e) {
        console.error('Failed to load accessibility settings', e);
      }
    }
  }
}
