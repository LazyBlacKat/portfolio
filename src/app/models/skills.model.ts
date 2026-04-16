/**
 * skills.model.ts
 * * ARCHITECTURAL NOTE:
 * In a larger scale application, DTOs (Data Transfer Objects)
 * would be moved to a separate /core/models/dto folder.
 * For this portfolio, there are no separate interfaces for DTOs
 */
export type SkillCategoryType = 'frontend' | 'tools' | 'soft';

export interface SkillData {
  subtitle: string;
  categories: SkillCategory[];
  skills: Skill[];
}

export interface SkillCategory {
  id: SkillCategoryType;
  label: string;
  color: string;
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategoryType;
  level: number;
  children?: Skill[];
}
