import { Component } from '@angular/core';
import { Header } from './header/header';
import { ProfileCard } from './profile-card/profile-card';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';

@Component({
  selector: 'app-root',
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  fullName = 'Robyn Desiree D. Gonzales';
  location = 'City of San Fernando, Pampanga';
  email = 'gonzalesrobyn24@gmail.com';
  phone = '0998 123 4567';

  profile = 'I am a frontend-focused web development student passionate about UI/UX design and building clean, responsive interfaces. I enjoy turning wireframes into accessible, interactive web applications using modern tools and component-based architecture.';

  skills = [
    'UI/UX Wireframing & Prototyping',
    'Responsive Web Design',
    'Frontend Component Architecture',
    'Design Systems & Typography'
  ];

  proficiency: Proficiency[] = [
    { tool: 'Figma', level: 'Advanced' },
    { tool: 'HTML5 & CSS3', level: 'Advanced' },
    { tool: 'Visual Studio Code', level: 'Intermediate' },
    { tool: 'Angular & TypeScript', level: 'Beginner' },
    { tool: 'Git and GitHub', level: 'Intermediate' }
  ];

   message = 'Click any skill above to select it.';

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
