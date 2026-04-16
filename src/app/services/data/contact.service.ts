import {computed, Injectable} from '@angular/core';
import {BaseDataService} from '../core/base-data.service';
import {ContactData} from '../../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService extends BaseDataService<ContactData>{

  get fileName(): string {
    return 'contact';
  }

  readonly socialLinks = computed(() => this.data()?.socialLinks ?? []);
  readonly location = computed(() => this.data()?.location ?? '');
  readonly availability = computed(() => this.data()?.availability ?? '');


}
