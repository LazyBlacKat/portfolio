import {Component, inject, signal} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { NavigationService } from '../../services/core/navigation.service';
import {ContactService} from '../../services/data/contact.service';
import {Email} from '../../models/contact.model';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  readonly navService = inject(NavigationService);
  readonly contactService = inject(ContactService);

  readonly subtitle = this.contactService.subtitle;
  readonly socialLinks = this.contactService.socialLinks;
  readonly location = this.contactService.location;
  readonly availability = this.contactService.availability;

  readonly copiedEmail = signal(false);

  async copyEmail(email: Email | undefined): Promise<void> {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(`${email.user}@${email.domain}`);
      this.copiedEmail.set(true);
      setTimeout(() => this.copiedEmail.set(false), 3000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  }
}
