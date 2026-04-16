import {Injectable, signal} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {

  private langSubject = new BehaviorSubject<string>('en');
  currentLang$ = this.langSubject.asObservable();

  currentLang = signal<'en' | 'hu'>('en');

  setLanguage(lang: 'en' | 'hu') {
    this.langSubject.next(lang);
    this.currentLang.set(lang);
  }

}
