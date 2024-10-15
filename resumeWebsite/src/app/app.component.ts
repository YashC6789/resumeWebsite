import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './landing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingComponent],
  template: `
      <app-landing/>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'resumeWebsite';
}
