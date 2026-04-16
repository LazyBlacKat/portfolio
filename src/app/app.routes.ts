import { Routes } from '@angular/router';
import {App} from './app';
import {portfolioResolver} from './resolvers/portfolio-resolver';

export const routes: Routes = [
  { path: '', component: App, resolve: {initialData: portfolioResolver} }
];
