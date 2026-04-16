import { ResolveFn } from '@angular/router';
import {inject} from '@angular/core';
import {AboutService} from '../services/data/about.service';
import {ContactService} from '../services/data/contact.service';
import {ProfileService} from '../services/data/profile.service';
import {ProjectsService} from '../services/data/projects.service';
import {ReferencesService} from '../services/data/references.service';
import {SkillsService} from '../services/data/skills.service';
import {forkJoin, of, take, map, catchError, Observable, filter} from 'rxjs';

export const portfolioResolver: ResolveFn<boolean> = () => {

  const services = [
    inject(AboutService),
    inject(ContactService),
    inject(ProfileService),
    inject(ProjectsService),
    inject(ReferencesService),
    inject(SkillsService)
  ];

  return forkJoin(
    services.map(s =>
      (s.data$ as Observable<any>).pipe(
        filter(data => data !== undefined && Object.keys(data).length > 0),
        take(1)
      )
    )
  ).pipe(
    map(() => true),
    catchError(() => {return of(true)})
  );

};
