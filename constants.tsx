
import { Project, Skill, TimelineItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'student-score-predictor',
    title: 'Student Score Predictor',
    description: 'A unified machine learning web application that predicts student academic scores using Linear Regression.',
    tags: ['Python', 'Flask', 'Scikit-learn', 'AI / Machine Learning'],
    image: 'https://sageuniversity.edu.in/assets/images/blog/tech-predictions-for-2022.webp', // Data Viz
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
    id: 'buildsmart-ai',
    title: 'BuildSmart AI',
    description: 'A specialized AI-driven construction management SaaS designed for intelligent delay prediction and automated resource optimization.',
    tags: ['Next.js', 'FastAPI', 'SaaS Platforms'],
    image: 'https://land8.com/wp-content/uploads/2017/07/AutoCAD-professional.jpg', // Engineering Dashboard feel
    repoLink: 'Repository — To Be Linked',
    status: 'Ongoing',
    details: 'Currently in development, BuildSmart AI leverages historical project data to provide actionable insights for site managers, featuring construction planning dashboards and resource allocation analytics to revolutionize industry efficiency.'
  },
  {
    id: 'trials-of-ascendence',
    title: 'Trials of Ascendence',
    description: 'An action-driven gameplay prototype exploring player progression systems, environment traversal mechanics, and combat-oriented interactions developed using Unreal Engine 5 and Blueprint scripting.',
    tags: ['Unreal Engine 5', 'Blueprint', 'Game Development'],
    image: 'data:image/jpeg;base64,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', // Gaming/Environment
    repoLink: 'Private Build — In Development',
    status: 'Ongoing',
    details: 'Key Features: Progression mechanics, combat interactions, traversal systems, and real-time gameplay logic. This project focuses on high-fidelity interaction design within a AAA-grade engine environment.'
  },
  {
    id: 'bike-combat-racing',
    title: 'Bike Combat Racing Prototype',
    description: 'A combat-racing gameplay prototype focusing on high-speed bike navigation combined with player combat interactions, inspired by classic arcade bike battle mechanics.',
    tags: ['Unreal Engine 5', 'Physics Systems', 'Game Development'],
    image: 'https://m.media-amazon.com/images/I/41wl5RjpldL._AC_UF350,350_QL80_.jpg', // Motorcycle/Vehicle
    repoLink: 'Prototype Build — Private',
    status: 'Ongoing',
    details: 'Key Features: Specialized bike physics systems, combat hit mechanics, AI rider encounters, and dynamic camera tracking systems designed for immersive vehicular combat.'
  },
  {
    id: 'facial-expression-detection',
    title: 'Facial Expression Detection System',
    description: 'A robust real-time emotion recognition system utilizing Convolutional Neural Networks (CNNs) and OpenCV for high-accuracy live video processing.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'AI / Machine Learning'],
    image: 'https://learn.g2.com/hubfs/G2CM_FI454_Learn_Article_Images_%5BFacial_recognition%5D_V1a-1.png', // AI/Neural feel
    repoLink: 'Repository — To Be Linked',
    status: 'Completed',
    details: 'This system identifies seven primary human emotions in real-time using DeepFace analysis and bounding box overlays. Optimized for edge deployment, it achieves high frame rates for live webcam detection feeds.'
  },
  {
    id: 'industrial-fault-detection',
    title: 'Industrial Equipment Fault Detection',
    description: 'An advanced predictive maintenance solution that analyzes acoustic and sensor data to detect early-stage mechanical failures in heavy machinery.',
    tags: ['Signal Processing', 'Scikit-Learn', 'AI / Machine Learning'],
    image: 'https://img.freepik.com/premium-photo/closeup-hand-holding-microchip-with-cybersecurity-warning-digital-threat-hacking-malware_795407-4402.jpg?semt=ais_user_personalization&w=740&q=80', // Industrial/Sensor
    repoLink: 'Repository — To Be Linked',
    status: 'Completed',
    details: 'Utilizes machinery analytics and sensor anomaly graphs to identify mechanical failures. Successfully monitors real-time sensor streams to provide predictive maintenance alerts through an industrial monitoring UI.'
  },
  {
    id: 'ai-pathfinding-simulation',
    title: 'AI Pathfinding Simulation',
    description: 'An intelligent pathfinding simulation demonstrating autonomous navigation logic similar to self-driving systems.',
    tags: ['Python', 'AI Algorithms', 'Game Development', 'Simulation AI'],
    image: 'https://media.licdn.com/dms/image/v2/D4E12AQHxyWBfOnWXPQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1709489504324?e=2147483647&v=beta&t=nJZztbMA8hGsoYYk6DfZcDlW5Y0JjulNpT2aOCo3TEk', // Network/Path
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
    year: '2023 – Present',
    title: 'B.Tech in Artificial Intelligence & Data Science',
    company: 'Velammal Engineering College',
    description: 'Currently pursuing a Bachelor’s degree in Artificial Intelligence and Data Science, focusing on machine learning, intelligent systems, and real-world AI applications.',
    type: 'education'
  },
  {
    year: '2025 – Present',
    title: 'Web Development Contributor',
    company: 'Velammal Engineering College — WebTeam',
    description: 'Worked as part of the institutional WebTeam contributing to live web platforms. Responsibilities included backend feature development, system maintenance, and production content/data integration.',
    type: 'work',
    badge: 'Production Environment Exposure',
    link: 'https://velammal.edu.in/webteam',
    linkText: 'Validated Institutional Contribution — VEC WebTeam'
  },
  {
    year: '2026',
    title: 'QA Proctored Test Platform (Team Project)',
    company: 'Velammal Engineering College',
    description: 'Contributed to a secure web-based examination platform. Engineered key backend modules including exam session handling, authentication workflows, test submission pipelines, and activity logging systems for institutional deployment.',
    type: 'work',
    badge: 'Institutional Deployment Experience'
  },
  
];
