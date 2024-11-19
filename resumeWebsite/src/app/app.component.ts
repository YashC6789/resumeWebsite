import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './Landing/landing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingComponent],
  template: `
    <nav class="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <!-- <li><a href="/experiences">Experience</a></li>
        <li><a href="/interests">Interests</a></li>
        <li><a href="/contact">Contact</a></li> -->
      </ul>
    </nav>
    <router-outlet/>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'resumeWebsite';
}
