export interface Project {
  id: string;
  title: string;
  description?: string;
  image: string;
  url: string;
  technologies?: string[];
}

export interface Technology {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'design' | 'testing' | 'practices';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  profileImage: string;
  resumeUrl: string;
  socialLinks: SocialLink[];
}

export interface NavigationItem {
  label: string;
  href: string;
}