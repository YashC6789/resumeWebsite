import { Routes } from '@angular/router';
import { LandingComponent } from './Landing/landing.component';
import { ProjectsComponent } from './Projects/projects.component';

export const routes: Routes = [
    {
        path: '',
        title: 'App Home Page',
        component: LandingComponent,
    },
    {
        path: 'projects',
        title: 'App Project Page',
        component: ProjectsComponent,
    },
];
