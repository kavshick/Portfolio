
import { Project, Skill, TimelineItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'facial-expression-detection',
    title: 'Facial Expression Detection System',
    description: 'A robust real-time emotion recognition system utilizing Convolutional Neural Networks (CNNs) and OpenCV for high-accuracy live video processing.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'AI / Machine Learning'],
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800',
    repoLink: 'https://github.com/kavshick',
    status: 'Completed',
    details: 'This system identifies seven primary human emotions in real-time. It features an optimized model architecture designed for edge deployment, achieving high frame rates without compromising detection accuracy.'
  },
  {
    id: 'industrial-fault-detection',
    title: 'Industrial Equipment Fault Detection',
    description: 'An advanced predictive maintenance solution that analyzes acoustic and sensor data to detect early-stage mechanical failures in heavy machinery.',
    tags: ['Signal Processing', 'Scikit-Learn', 'AI / Machine Learning'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    repoLink: 'https://github.com/kavshick',
    status: 'Completed',
    details: 'Utilizes isolation forests and random forest classifiers to identify anomalies in equipment behavior. Successfully reduced theoretical machine downtime by monitoring real-time sensor streams.'
  },
  {
    id: 'media-player',
    title: 'Media Player',
    description: 'A modern media manager web application integrated with Google Drive that allows users to upload, organize, and view images, videos, PDFs, and other files directly from cloud storage.',
    tags: ['JavaScript', 'Web APIs', 'Google Drive API', 'Web Applications'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    repoLink: 'https://github.com/kavshick/Media-Player',
    status: 'Completed',
    details: 'Key Features: Google Drive file integration, Media preview system, Upload & manage files, Animated UI experience, Multi-format viewer.'
  },
  {
    id: 'student-score-predictor',
    title: 'Student Score Predictor',
    description: 'A unified machine learning web application that predicts student academic scores using Linear Regression.',
    tags: ['Python', 'Flask', 'Scikit-learn', 'AI / Machine Learning'],
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800',
    repoLink: 'https://github.com/kavshick/Student-Score-Predictor',
    status: 'Completed',
    details: 'Key Features: Linear Regression prediction model, Integrated Flask backend, REST API inference, Web input interface, Real-time prediction output.'
  },
  {
    id: 'ai-pathfinding-simulation',
    title: 'AI Pathfinding Simulation',
    description: 'An intelligent pathfinding simulation demonstrating autonomous navigation logic similar to self-driving systems.',
    tags: ['Python', 'AI Algorithms', 'Game Development', 'Simulation AI'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    repoLink: 'Repository — To Be Linked',
    status: 'Completed',
    details: 'Key Features: Autonomous navigation logic, Obstacle avoidance, Path optimization algorithms, Real-time movement simulation.'
  },
  {
    id: 'buildsmart-ai',
    title: 'BuildSmart AI',
    description: 'A specialized AI-driven construction management SaaS designed for intelligent delay prediction and automated resource optimization.',
    tags: ['Next.js', 'FastAPI', 'SaaS Platforms'],
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=800',
    repoLink: 'https://github.com/kavshick',
    status: 'Ongoing',
    details: 'Currently in development, BuildSmart AI leverages historical project data to provide actionable insights for site managers, aiming to revolutionize construction efficiency through deep learning.'
  },
  {
    id: 'interactive-game-prototypes',
    title: 'Interactive Game Prototypes',
    description: 'A collection of experimental mini-game prototypes exploring player controls, physics systems, UI overlays, and interactive gameplay mechanics.',
    tags: ['Unity', 'JavaScript', 'Game Development'],
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800',
    repoLink: 'Private / Prototype Build',
    status: 'Ongoing',
    details: 'Key Features: Physics-based mechanics, Player movement systems, Score tracking, UI overlays, Gameplay logic experiments.'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Machine Learning', level: 90, category: 'AI' },
  { name: 'Deep Learning', level: 85, category: 'AI' },
  { name: 'Data Science', level: 88, category: 'AI' },
  { name: 'Python / FastAPI', level: 90, category: 'Backend' },
  { name: 'Next.js / TypeScript', level: 92, category: 'Frontend' },
  { name: 'PostgreSQL', level: 80, category: 'Backend' },
  { name: 'Unity / C#', level: 75, category: 'GameDev' },
  { name: 'AI Pathfinding', level: 85, category: 'GameDev' },
  { name: 'Cloud Infrastructure', level: 70, category: 'Tools' }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: 'Present',
    title: 'AI Engineer & SaaS Builder',
    company: 'Independent / Startups',
    description: 'Focusing on autonomous AI systems and scalable SaaS architectures.',
    type: 'work'
  },
  {
    year: '2021 - 2025 (Expected)',
    title: 'B.Tech in Artificial Intelligence & Data Science',
    company: 'Academic Institution',
    description: 'Deepening expertise in statistical modeling and advanced machine learning.',
    type: 'education'
  }
];
