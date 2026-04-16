import { Component, inject } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { NavigationService } from '../../services/core/navigation.service';
import {ReferencesService} from '../../services/data/references.service';

@Component({
  selector: 'app-references',
  imports: [MatCard, MatCardContent, MatIcon, MatIconButton],
  templateUrl: './references.html',
  styleUrl: './references.css',
})
export class References {

  readonly navService = inject(NavigationService);
  readonly referencesService = inject(ReferencesService);

  readonly subtitle = this.referencesService.subtitle;
  readonly references = this.referencesService.references;

  showTranslation: { [key: number]: boolean } = {};

  toggleTranslation(index: number): void {
    this.showTranslation[index] = !this.showTranslation[index];
  }

}
