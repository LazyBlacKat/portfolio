import {ContactData} from '../models/contact.model';

export const DATA: ContactData = {
  subtitle: "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
  socialLinks: [
    {
      icon: "email",
      label: "Email",
      action: "copy",
      value: {
        user: "name",
        domain: "example.com"
      }
    },
    {
      icon: "link",
      label: "LinkedIn",
      link: "https://linkedin.com"
    },
    {
      icon: "code",
      label: "GitHub",
      link: "https://github.com"
    }
  ],
  location: "Located in Europe — Available worldwide",
  availability: "Available for freelance, full-time remote/hybrid work, and B2B contracts"
}
