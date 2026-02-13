
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  repoLink: string;
  details: string;
  status: 'Completed' | 'Ongoing';
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'AI' | 'Backend' | 'Frontend' | 'Tools' | 'GameDev';
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  type: 'work' | 'education';
}
