import {computed, Injectable} from '@angular/core';
import {BaseDataService} from '../core/base-data.service';
import {ReferencesData} from '../../models/references.model';

@Injectable({
  providedIn: 'root',
})
export class ReferencesService extends BaseDataService<ReferencesData>{

  get fileName(): string {
    return 'references';
  }

  readonly references = computed(() => this.data()?.references ?? []);

}
