
import { Project, Skill, TimelineItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'buildsmart-ai',
    title: 'BuildSmart AI',
    description: 'A specialized AI-driven construction management SaaS designed for intelligent delay prediction and automated resource optimization.',
    tags: ['Next.js', 'FastAPI', 'SaaS Platforms'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
    repoLink: 'https://github.com/kavshick',
    status: 'Ongoing',
    details: 'Currently in development, BuildSmart AI leverages historical project data to provide actionable insights for site managers, featuring construction planning dashboards and resource allocation analytics to revolutionize industry efficiency.'
  },
  {
    id: 'facial-expression-detection',
    title: 'Facial Expression Detection System',
    description: 'A robust real-time emotion recognition system utilizing Convolutional Neural Networks (CNNs) and OpenCV for high-accuracy live video processing.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'AI / Machine Learning'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    repoLink: 'https://github.com/kavshick',
    status: 'Completed',
    details: 'This system identifies seven primary human emotions in real-time using DeepFace analysis and bounding box overlays. Optimized for edge deployment, it achieves high frame rates for live webcam detection feeds.'
  },
  {
    id: 'industrial-fault-detection',
    title: 'Industrial Equipment Fault Detection',
    description: 'An advanced predictive maintenance solution that analyzes acoustic and sensor data to detect early-stage mechanical failures in heavy machinery.',
    tags: ['Signal Processing', 'Scikit-Learn', 'AI / Machine Learning'],
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
    repoLink: 'https://github.com/kavshick',
    status: 'Completed',
    details: 'Utilizes machinery analytics and sensor anomaly graphs to identify mechanical failures. Successfully monitors real-time sensor streams to provide predictive maintenance alerts through an industrial monitoring UI.'
  },
  {
    id: 'student-score-predictor',
    title: 'Student Score Predictor',
    description: 'A unified machine learning web application that predicts student academic scores using Linear Regression.',
    tags: ['Python', 'Flask', 'Scikit-learn', 'AI / Machine Learning'],
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
    repoLink: 'https://github.com/kavshick/Student-Score-Predictor',
    status: 'Completed',
    details: 'Key Features: Regression graphs, integrated Flask backend, and real-time prediction dashboards. The model processes input features to output precise academic score forecasts via ML model result plots.'
  },
  {
    id: 'media-player',
    title: 'Media Player',
    description: 'A modern media manager web application integrated with Google Drive that allows users to upload, organize, and view images, videos, PDFs, and other files directly from cloud storage.',
    tags: ['JavaScript', 'Web APIs', 'Google Drive API', 'Web Applications'],
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg',
    repoLink: 'https://github.com/kavshick/Media-Player',
    status: 'Completed',
    details: 'A clean media gallery UI featuring Google Drive file integration, secure file upload dashboards, and a multi-format preview interface for high-performance cloud media management.'
  },
  {
    id: 'ai-pathfinding-simulation',
    title: 'AI Pathfinding Simulation',
    description: 'An intelligent pathfinding simulation demonstrating autonomous navigation logic similar to self-driving systems.',
    tags: ['Python', 'AI Algorithms', 'Game Development', 'Simulation AI'],
    image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg',
    repoLink: 'Repository — To Be Linked',
    status: 'Completed',
    details: 'Key Features: Autonomous grid navigation systems, AI path optimization, and node exploration visualization. Demonstrates robust obstacle avoidance mapping for autonomous systems.'
  },
  {
    id: 'interactive-game-prototypes',
    title: 'Interactive Game Prototypes',
    description: 'A collection of experimental mini-game prototypes exploring player controls, physics systems, UI overlays, and interactive gameplay mechanics.',
    tags: ['Unity', 'JavaScript', 'Game Development'],
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    repoLink: 'Private / Prototype Build',
    status: 'Ongoing',
    details: 'Prototype / In Development: Exploring physics-based mechanics and gameplay wireframes within a modern game engine editor environment. Focuses on player movement systems and UI/UX prototyping.'
  }
];

export const SKILLS: Skill[] = [
  // AI / Machine Learning
  { name: 'Machine Learning', level: 75, category: 'AI / Machine Learning' },
  { name: 'Deep Learning', level: 70, category: 'AI / Machine Learning' },
  { name: 'Computer Vision', level: 72, category: 'AI / Machine Learning' },
  { name: 'Emotion Recognition (DeepFace)', level: 70, category: 'AI / Machine Learning' },
  { name: 'Predictive Modeling', level: 72, category: 'AI / Machine Learning' },
  { name: 'Data Preprocessing', level: 70, category: 'AI / Machine Learning' },

  // Programming & Backend
  { name: 'Python', level: 75, category: 'Programming & Backend' },
  { name: 'Flask', level: 70, category: 'Programming & Backend' },
  { name: 'REST API Development', level: 68, category: 'Programming & Backend' },
  { name: 'Scikit-learn', level: 72, category: 'Programming & Backend' },
  { name: 'Model Integration', level: 68, category: 'Programming & Backend' },

  // Data & Analytics
  { name: 'Data Analysis', level: 70, category: 'Data & Analytics' },
  { name: 'Statistical Modeling', level: 65, category: 'Data & Analytics' },
  { name: 'CSV / Dataset Processing', level: 72, category: 'Data & Analytics' },
  { name: 'Visualization Basics', level: 68, category: 'Data & Analytics' },

  // Frontend & Web
  { name: 'HTML', level: 72, category: 'Frontend & Web' },
  { name: 'CSS', level: 68, category: 'Frontend & Web' },
  { name: 'JavaScript', level: 65, category: 'Frontend & Web' },
  { name: 'Interactive UI Development', level: 68, category: 'Frontend & Web' },

  // SaaS & Product Development
  { name: 'SaaS Architecture Design', level: 70, category: 'SaaS & Product Development' },
  { name: 'Dashboard Systems', level: 72, category: 'SaaS & Product Development' },
  { name: 'Analytics Platforms', level: 70, category: 'SaaS & Product Development' },
  { name: 'Monetization Integration', level: 62, category: 'SaaS & Product Development' },

  // Game & Simulation Development
  { name: 'Pathfinding Algorithms', level: 70, category: 'Game & Simulation Development' },
  { name: 'AI Navigation Logic', level: 72, category: 'Game & Simulation Development' },
  { name: 'Simulation Systems', level: 68, category: 'Game & Simulation Development' },
  { name: 'Gameplay Mechanics Prototyping', level: 65, category: 'Game & Simulation Development' }
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
    year: '2023 – Present',
    title: 'Web Development Contributor',
    company: 'Velammal Engineering College — WebTeam',
    description: 'Worked as part of the institutional WebTeam contributing to live web platforms. Responsibilities included backend feature development, system maintenance, and production content/data integration.',
    type: 'work',
    badge: 'Production Environment Exposure',
    link: 'https://velammal.edu.in/webteam',
    linkText: 'Validated Institutional Contribution — VEC WebTeam'
  },
  {
    year: '2024',
    title: 'QA Proctored Test Platform (Team Project)',
    company: 'Velammal Engineering College',
    description: 'Contributed to a secure web-based examination platform. Engineered key backend modules including exam session handling, authentication workflows, test submission pipelines, and activity logging systems for institutional deployment.',
    type: 'work',
    badge: 'Institutional Deployment Experience'
  },
  {
    year: '2023 – 2027 (Current)',
    title: 'B.Tech in Artificial Intelligence & Data Science',
    company: 'Velammal Engineering College',
    description: 'Currently pursuing a Bachelor’s degree in Artificial Intelligence and Data Science, focusing on machine learning, intelligent systems, and real-world AI applications.',
    type: 'education'
  }
];