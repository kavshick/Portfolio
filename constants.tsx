
import { Project, Skill, TimelineItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'buildsmart-ai',
    title: 'BuildSmart AI',
    description: 'A specialized AI-driven construction management SaaS designed for intelligent delay prediction and automated resource optimization.',
    tags: ['Next.js', 'FastAPI', 'SaaS Platforms'],
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800', // Engineering Dashboard feel
    repoLink: 'https://github.com/kavshick',
    status: 'Ongoing',
    details: 'Currently in development, BuildSmart AI leverages historical project data to provide actionable insights for site managers, featuring construction planning dashboards and resource allocation analytics to revolutionize industry efficiency.'
  },
  {
    id: 'trials-of-ascendence',
    title: 'Trials of Ascendence',
    description: 'An action-driven gameplay prototype exploring player progression systems, environment traversal mechanics, and combat-oriented interactions developed using Unreal Engine 5 and Blueprint scripting.',
    tags: ['Unreal Engine 5', 'Blueprint', 'Game Development'],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800', // Gaming/Environment
    repoLink: 'Private Build — In Development',
    status: 'Ongoing',
    details: 'Key Features: Progression mechanics, combat interactions, traversal systems, and real-time gameplay logic. This project focuses on high-fidelity interaction design within a AAA-grade engine environment.'
  },
  {
    id: 'bike-combat-racing',
    title: 'Bike Combat Racing Prototype',
    description: 'A combat-racing gameplay prototype focusing on high-speed bike navigation combined with player combat interactions, inspired by classic arcade bike battle mechanics.',
    tags: ['Unreal Engine 5', 'Physics Systems', 'Game Development'],
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800', // Motorcycle/Vehicle
    repoLink: 'Prototype Build — Private',
    status: 'Ongoing',
    details: 'Key Features: Specialized bike physics systems, combat hit mechanics, AI rider encounters, and dynamic camera tracking systems designed for immersive vehicular combat.'
  },
  {
    id: 'facial-expression-detection',
    title: 'Facial Expression Detection System',
    description: 'A robust real-time emotion recognition system utilizing Convolutional Neural Networks (CNNs) and OpenCV for high-accuracy live video processing.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'AI / Machine Learning'],
    image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=800', // AI/Neural feel
    repoLink: 'https://github.com/kavshick',
    status: 'Completed',
    details: 'This system identifies seven primary human emotions in real-time using DeepFace analysis and bounding box overlays. Optimized for edge deployment, it achieves high frame rates for live webcam detection feeds.'
  },
  {
    id: 'industrial-fault-detection',
    title: 'Industrial Equipment Fault Detection',
    description: 'An advanced predictive maintenance solution that analyzes acoustic and sensor data to detect early-stage mechanical failures in heavy machinery.',
    tags: ['Signal Processing', 'Scikit-Learn', 'AI / Machine Learning'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800', // Industrial/Sensor
    repoLink: 'https://github.com/kavshick',
    status: 'Completed',
    details: 'Utilizes machinery analytics and sensor anomaly graphs to identify mechanical failures. Successfully monitors real-time sensor streams to provide predictive maintenance alerts through an industrial monitoring UI.'
  },
  {
    id: 'student-score-predictor',
    title: 'Student Score Predictor',
    description: 'A unified machine learning web application that predicts student academic scores using Linear Regression.',
    tags: ['Python', 'Flask', 'Scikit-learn', 'AI / Machine Learning'],
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800', // Data Viz
    repoLink: 'https://github.com/kavshick/Student-Score-Predictor',
    status: 'Completed',
    details: 'Key Features: Regression graphs, integrated Flask backend, and real-time prediction dashboards. The model processes input features to output precise academic score forecasts via ML model result plots.'
  },
  {
    id: 'media-player',
    title: 'Media Player',
    description: 'A modern media manager web application integrated with Google Drive that allows users to upload, organize, and view images, videos, PDFs, and other files directly from cloud storage.',
    tags: ['JavaScript', 'Web APIs', 'Google Drive API', 'Web Applications'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800', // Media UI
    repoLink: 'https://github.com/kavshick/Media-Player',
    status: 'Completed',
    details: 'A clean media gallery UI featuring Google Drive file integration, secure file upload dashboards, and a multi-format preview interface for high-performance cloud media management.'
  },
  {
    id: 'ai-pathfinding-simulation',
    title: 'AI Pathfinding Simulation',
    description: 'An intelligent pathfinding simulation demonstrating autonomous navigation logic similar to self-driving systems.',
    tags: ['Python', 'AI Algorithms', 'Game Development', 'Simulation AI'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800', // Network/Path
    repoLink: 'Repository — To Be Linked',
    status: 'Completed',
    details: 'Key Features: Autonomous grid navigation systems, AI path optimization, and node exploration visualization. Demonstrates robust obstacle avoidance mapping for autonomous systems.'
  }
];

export const SKILLS: Skill[] = [
  // AI / Machine Learning
  { name: 'Machine Learning', level: 75, category: 'AI / Machine Learning' },
  { name: 'Deep Learning', level: 70, category: 'AI / Machine Learning' },
  { name: 'Computer Vision', level: 72, category: 'AI / Machine Learning' },
  { name: 'Emotion Recognition (DeepFace)', level: 70, category: 'AI / Machine Learning' },
  { name: 'Predictive Modeling', level: 72, category: 'AI / Machine Learning' },

  // Programming & Backend
  { name: 'Python', level: 75, category: 'Programming & Backend' },
  { name: 'Flask', level: 70, category: 'Programming & Backend' },
  { name: 'REST API Development', level: 68, category: 'Programming & Backend' },
  { name: 'Scikit-learn', level: 72, category: 'Programming & Backend' },

  // Data & Analytics
  { name: 'Data Analysis', level: 70, category: 'Data & Analytics' },
  { name: 'Statistical Modeling', level: 65, category: 'Data & Analytics' },
  { name: 'CSV / Dataset Processing', level: 72, category: 'Data & Analytics' },

  // Frontend & Web
  { name: 'HTML / CSS', level: 72, category: 'Frontend & Web' },
  { name: 'JavaScript', level: 65, category: 'Frontend & Web' },
  { name: 'Interactive UI Development', level: 68, category: 'Frontend & Web' },

  // SaaS & Product Development
  { name: 'SaaS Architecture Design', level: 70, category: 'SaaS & Product Development' },
  { name: 'Dashboard Systems', level: 72, category: 'SaaS & Product Development' },
  { name: 'Analytics Platforms', level: 70, category: 'SaaS & Product Development' },

  // Game & Simulation Development
  { name: 'Unreal Engine 5', level: 72, category: 'Game & Simulation Development' },
  { name: 'Blueprint Visual Scripting', level: 70, category: 'Game & Simulation Development' },
  { name: 'Real-Time Rendering', level: 68, category: 'Game & Simulation Development' },
  { name: 'Level Design Systems', level: 70, category: 'Game & Simulation Development' },
  { name: 'Physics Simulation', level: 72, category: 'Game & Simulation Development' },
  { name: 'Gameplay Mechanics Design', level: 70, category: 'Game & Simulation Development' }
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
