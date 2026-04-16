import {Component, computed, inject, signal} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {Skill} from '../../models/skills.model';
import {SkillsService} from '../../services/data/skills.service';

@Component({
  selector: 'app-skills',
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {

  private skillsService = inject(SkillsService);

  readonly subtitle = this.skillsService.subtitle;
  readonly categories = this.skillsService.categories;
  readonly categoryColors = this.skillsService.categoryColorMap;
  readonly allSkills = this.skillsService.displayableSkills;

  readonly selectedCategory = signal<string | null>(null);
  readonly searchTerm = signal<string>('');

  readonly filteredSkills = computed(() => {
    const skills = this.allSkills();
    const category = this.selectedCategory();
    const search = this.searchTerm().toLowerCase();

    let result = skills.filter(skill => {
      const categoryMatch = !category || skill.category === category;
      const parentMatch = skill.name.toLowerCase().includes(search);
      const childrenMatch = skill.children?.some(child =>
        child.name.toLowerCase().includes(search)
      ) ?? false;

      return categoryMatch && (parentMatch || childrenMatch);
    });

    return this.sortSkillsRecursively(result);
  });

  private sortSkillsRecursively(skills: Skill[]): Skill[] {
    return [...skills]
      .sort((a, b) => (b.level ?? 0) - (a.level ?? 0))
      .map(skill => ({
        ...skill,
        children: skill.children ? this.sortSkillsRecursively(skill.children) : []
      }));
  }

  filterByCategory(category: string | null): void {
    this.selectedCategory.set(category);
  }

  onSearchInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm.set(value);
  }

}
