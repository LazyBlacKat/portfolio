import { Component, inject } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatChip } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { NavigationService } from '../../services/core/navigation.service';
import {ProjectsService} from '../../services/data/projects.service';

@Component({
  selector: 'app-projects',
  imports: [MatCard, MatCardContent, MatChip, MatIcon, MatButton],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly navService = inject(NavigationService);

  private projectsService = inject(ProjectsService);

  readonly subtitle = this.projectsService.subtitle;
  readonly projects = this.projectsService.projects;
  readonly hintTitle = this.projectsService.hintTitle;
  readonly hintDescription = this.projectsService.hintDescription;
}
