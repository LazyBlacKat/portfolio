export interface ReferencesData {
  subtitle: string;
  references: Reference[];
}

export interface Reference {
  name: string;
  position: string;
  company: string;
  relationship: string;
  text: string;
  translation?: string;
}
