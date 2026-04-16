import {computed, Injectable} from '@angular/core';
import {BaseDataService} from '../core/base-data.service';
import {ProjectsData} from '../../models/projects.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService extends BaseDataService<ProjectsData>{

  get fileName(): string {
    return 'projects';
  }

  readonly projects = computed(() => this.data()?.projects ?? []);

  readonly hintTitle = computed(() => this.data()?.hint?.title ?? '');
  readonly hintDescription = computed(() => this.data()?.hint?.description ?? '');

}
