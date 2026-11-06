import {Profile} from '../../features/profile/profile';
import {Project, SkillGroup, SocialLink} from '../models/portfolio.model';


export const PROFILE: Profile = {
  name: 'DNFneca',
  role: 'Full-stack & game developer',
  headline: 'I build web apps and multiplayer games.',
  about: [
    'I work independently on a mix of web and game projects, from booking flows and marketing sites to real-time multiplayer platforms and Roblox tooling.',
    'On the web I mostly pair Angular frontends with Java/Spring Boot or Node.js backends. On the game side I build multiplayer systems and in-game UI.',
  ],
  email: 'hello@example.com',
  socials: [{label: 'GitHub', href: 'https://github.com/'}] as SocialLink[],
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['Angular', 'TypeScript', 'Tailwind CSS', 'HTML & CSS'],
  },
  {
    title: 'Backend',
    items: ['Java', 'Spring Boot', 'Node.js', 'Socket.io', 'STOMP', 'JWT auth'],
  },
  {
    title: 'Game dev',
    items: ['Roblox', 'Lua', 'Real-time multiplayer'],
  },
];

export const PROJECTS: Project[] = [
  {
    code: 'PR-01',
    title: 'PuzzleRace',
    description:
      'A real-time multiplayer game platform built with Angular 17 and a Node.js/Socket.io backend, with STOMP and JWT-based authentication.',
    tags: ['Angular', 'Node.js', 'Socket.io', 'JWT'],
  },
  {
    code: 'PR-02',
    title: 'Milecut',
    description: 'A barbershop website featuring an Angular multi-step booking component.',
    tags: ['Angular', 'Booking flow'],
  },
  {
    code: 'PR-03',
    title: 'Vila Mila',
    description: 'A static two-page marketing website for a villa and cabin rental business.',
    tags: ['Static site', 'Marketing'],
  },
  {
    code: 'PR-04',
    title: 'Roblox Inventory System',
    description: 'A Lua inventory system with a reusable shared tooltip and popout UI pattern.',
    tags: ['Roblox', 'Lua', 'UI'],
  },
  {
    code: 'PR-05',
    title: 'Obsidian Glass',
    description:
      'A custom VS Code theme: a dark, Twitter-inspired interface with glass and frosted effects.',
    tags: ['VS Code', 'Theme'],
  },
];
