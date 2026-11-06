export interface SocialLink {
  label: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Project {
  /** Short catalogue-style code shown on the tile, e.g. PR-01 */
  code: string;
  title: string;
  description: string;
  tags: string[];
  /** Optional thumbnail (e.g. '/projects/puzzlerace.jpg' from the public folder) */
  image?: string;
  href?: string;
}
