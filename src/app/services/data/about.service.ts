import {computed, Injectable} from '@angular/core';
import {BaseDataService} from '../core/base-data.service';
import {AboutData} from '../../models/about.model';

@Injectable({
  providedIn: 'root',
})
export class AboutService extends BaseDataService<AboutData> {

  get fileName(): string {
    return 'about';
  }

  readonly tips = computed(() => this.data()?.tips ?? []);

}
