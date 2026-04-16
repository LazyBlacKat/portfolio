export interface ContactData {
  subtitle: string;
  socialLinks: SocialLink[];
  location: string;
  availability: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  action?: string;
  value?: Email;
  link?: string;
}

export interface Email {
  user: string;
  domain: string;
}
