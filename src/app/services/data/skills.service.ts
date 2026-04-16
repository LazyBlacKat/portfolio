import {computed, Injectable} from '@angular/core';
import {BaseDataService} from '../core/base-data.service';
import {Skill, SkillData} from '../../models/skills.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService extends BaseDataService<SkillData>{

  get fileName(): string {
    return 'skills';
  }

  readonly displayableSkills = computed<Skill[]>(() => {
    const rawData = this.data();

    if (!rawData || !rawData.skills) {
      return [];
    }

    return rawData.skills.flatMap(parent => parent.children ?? []);
  });

  readonly categories = computed(() => this.data()?.categories ?? []);

  readonly categoryColorMap = computed(() => {
    const categories = this.data()?.categories ?? [];
    return categories.reduce((acc, cat) => {
      acc[cat.id] = cat.color;
      return acc;
    }, {} as Record<string, string>);
  });

}
