# Modern Portfolio Website

A modern, responsive portfolio website built with Angular 21 and Angular Material, featuring a dark/light theme switcher and interactive components.

## Sections

1. **Home/Title Page**: Introduction with photo and quote
2. **About Me**: Small sections about my thinking and journey
3. **Skills**: Skill cards with related skill badges
4. **Projects**: Gallery with hover effects and project details
5. **References**: Testimonial cards from colleagues and mentors
6. **Contact**: Contact form with social media links
7. **Sidenav**: Accessibility settings for readers, found in sidenav opened by icon-button
8. **Toolbar**: Navigation buttons and color theme switcher

## Features

- **Dual Theme Support**: Toggle between dark (purple-blue-grey) and light (blue-white) color schemes
- **Fully Responsive**: Uses Angular's BreakpointObserver instead of media queries for responsive behavior
- **Smooth Navigation**: One-page scrolling with URL fragment updates and active section highlighting
- **Reactive Navigation**: Breakpoint logic is handled via NavigationService Signals rather than just CSS hiding, optimizing DOM weight
- **Interactive Animation**: Hover effects on cards with additional data, for example, project details
- **Dynamic Translation**: Translation button for reference pages
- **Multi-language**: Dynamic language switching with Signal-driven async loading (only one language for now)
- **Accessibility**: Dynamic color contrast and focus styles for accessibility
- **SEO**: Optimized for search engines and social media sharing (only basics for now)
- **Recursive Search**: Advanced search functionality in the Skills section (scans both parent names and nested children).
- **Secure Copy**: Email "obfuscation" strategy where addresses are reconstructed from a split data structure only upon user interaction (bot protection)
- **Resolver**: Navigation is guarded by Resolvers that guarantee all asynchronous language data is 100% loaded before a component is initialized (preventing "Layout Shift")
- **Secure Dynamic Data Loading (Obfuscation)**: Instead of serving public, easily scrapable JSON files, this project uses .ts files loaded via Dynamic Imports through a BaseDataService. Build-time Security: During the production build, the TypeScript compiler minifies and "obfuscates" the data structures, making them unreadable as raw text in the network tab.
- **Computed Signals**: Complex logic for searching, filtering, and category-based sorting (Skills section) operates with atomic updates, eliminating unnecessary Change Detection cycles.
- **toSignal**: Asynchronous data streams (language switching) are seamlessly converted into Signals for the UI, ensuring a reactive and declarative flow.

## Project Structure

```plain
src/
├── app/
│   ├── components/            # Atomic UI components
│   │   ├── about-me/
│   │   ├── skills/            # Featuring complex filtering logic
│   │   └── ...
│   ├── data/                  # Data layer
│   │   ├── en/                # English data files (.ts)
│   │   └── *-template.ts      # Fallback/Template data files
│   ├── models/                # Strict TypeScript interfaces
│   └── resolvers/             # Data-fetch guarding logic
│   ├── services/
│   │   ├── core/              # Core services
│   │   │   └── base-data.service.ts  # Generic abstract class for data handling
│   │   └── data/              # Concrete data services
└── custom-theme.scss          # Angular Material custom theming
```

## Development

```bash
# Install dependencies
npm install

# Start development server
ng serve

# Generate optimized production build (with obfuscated data)
ng build --configuration production
```

### Built with
- [Angular](https://angular.io)
- [Angular Material](https://material.angular.io)
- [Angular CLI](https://cli.angular.io)
- [SCSS](https://sass-lang.com)
- [TypeScript](https://www.typescriptlang.org)
- [RxJS](https://rxjs.dev)
- [Google Fonts](https://fonts.google.com)
- [GithubPages](https://pages.github.com)

---

Built with ❤️ using Angular
