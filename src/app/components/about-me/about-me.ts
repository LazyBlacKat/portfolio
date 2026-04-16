import {Component, inject} from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle
} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { NavigationService } from '../../services/core/navigation.service';
import {AboutService} from '../../services/data/about.service';

@Component({
  selector: 'app-about-me',
  imports: [MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatIcon ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {

  readonly navService = inject(NavigationService);
  private aboutService = inject(AboutService);

  readonly subtitle = this.aboutService.subtitle;
  readonly tips = this.aboutService.tips;

}
