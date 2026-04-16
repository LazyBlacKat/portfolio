import {Component, inject} from '@angular/core';
import { NavigationService } from '../../services/core/navigation.service';
import {ProfileService} from '../../services/data/profile.service';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.html',
  styleUrl: './title-page.css',
})
export class TitlePage {
  navService = inject(NavigationService);

  private profileService = inject(ProfileService);

  readonly name = this.profileService.name;
  readonly role = this.profileService.role;
  readonly summary = this.profileService.summary;
  readonly objective = this.profileService.objective;
}
