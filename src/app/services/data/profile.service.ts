import {computed, Injectable} from '@angular/core';
import {BaseDataService} from '../core/base-data.service';
import {ProfileData} from '../../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService extends BaseDataService<ProfileData>{

  get fileName(): string {
    return 'profile';
  }

  readonly name = computed(() => this.data()?.name ?? '');
  readonly role = computed(() => this.data()?.role ?? '');
  readonly summary = computed(() => this.data()?.summary ?? '');
  readonly objective = computed(() => this.data()?.objective ?? '');

}
