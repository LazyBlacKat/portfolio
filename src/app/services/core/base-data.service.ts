import {computed, inject, Injectable, Signal} from '@angular/core';
import {LanguageService} from './language.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {catchError, filter, from, map, shareReplay, switchMap} from 'rxjs';
import {BaseDataSchema} from '../../models/base-data-schema';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseDataService<T extends BaseDataSchema> {

  protected languageService = inject(LanguageService);

  readonly data$ = this.languageService.currentLang$.pipe(
    switchMap(lang => {
      return from(import(`../../data/${lang}/${this.fileName}.ts`)).pipe(
        map(module => module.DATA as T),
        catchError(() => {
          return from(import(`../../data/${this.fileName}-template.ts`)).pipe(
            map(module => module.DATA as T)
          );
        })
      );
    }),
    filter(data => !!data),
    shareReplay(1)
  );

  protected dataSignal: Signal<T | undefined> = toSignal(this.data$);

  abstract get fileName(): string;

  readonly subtitle = computed(() => this.data()?.subtitle ?? '');

  get data(): Signal<T | undefined> {
    return this.dataSignal;
  }

}
