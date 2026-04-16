import { Component, inject } from '@angular/core';
import { MatButton, MatIconButton, MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { MatDivider } from '@angular/material/divider';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { AccessibilityService } from '../../services/core/accessibility.service';
import { NavigationService } from '../../services/core/navigation.service';

@Component({
  selector: 'app-accessibility-toolbar',
  standalone: true,
  imports: [
    MatButton,
    MatIconButton,
    MatFabButton,
    MatIcon,
    MatTooltip,
    MatDivider,
    MatSlideToggle
  ],
  templateUrl: './accessibility-toolbar.html',
  styleUrl: './accessibility-toolbar.css'
})
export class AccessibilityToolbar {
  accessibilityService = inject(AccessibilityService);
  navService = inject(NavigationService);
}
