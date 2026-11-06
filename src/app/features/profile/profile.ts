import {SocialLink} from '../../shared/models/portfolio.model';

export class Profile {
  name!: string;
  role!: string;
  headline!: string;
  about!: string[];
  email!: string;
  socials!: SocialLink[]
}
