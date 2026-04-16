export interface ProjectsData {
  subtitle: string;
  projects: Project[];
  hint: Hint;
}

export interface Project {
  title: string;
  description: string;
  descriptionLong: string;
  technologies: string[];
  imageUrl: string;
  demoVideoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  productUrl?: string;
}

export interface Hint {
  title: string;
  description: string;
}
