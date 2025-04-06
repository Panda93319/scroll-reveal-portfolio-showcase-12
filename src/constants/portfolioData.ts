
// Project data
export const projects = [
  {
    id: 1,
    title: 'Next Ventures',
    description: 'A online space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design.',
    image: '/lovable-uploads/c8b97f60-f85b-43f8-9b08-1f53f29e7206.png',
    url: 'https://example.com/nextventures',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Auth.js', 'Sanity.cms', 'GROQ', 'Sentry', 'markdown'],
    features: [
      'Leveraged Partial Prerendering and After for faster loading.',
      'Simplified idea submission with a clean, intuitive design.',
      'Enhanced browsing with seamless performance optimization.'
    ]
  },
  {
    id: 2,
    title: 'Fitness Tracker',
    description: 'A comprehensive fitness tracking application with personalized workout plans and progress visualization.',
    image: 'https://picsum.photos/id/26/800/600',
    url: 'https://example.com/fitnesstracker',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    features: [
      'Real-time workout tracking and analytics',
      'Personalized fitness recommendations',
      'Social sharing and community features'
    ]
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with advanced product filtering and secure checkout process.',
    image: 'https://picsum.photos/id/96/800/600',
    url: 'https://example.com/ecommerce',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
    features: [
      'Secure payment processing with Stripe integration',
      'Advanced product filtering and search capabilities',
      'Responsive design for all devices'
    ]
  }
];

// Skills data
export const skillCategories = [
  {
    name: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'Vue', icon: '🖖' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Angular', icon: '🅰️' },
      { name: 'TailwindCSS', icon: '🌊' },
      { name: 'TypeScript', icon: '📝' },
    ]
  },
  {
    name: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js', icon: '🟢' },      
      { name: 'Django', icon: '🐍' },      
      { name: 'Laravel', icon: '🔺' },      
    ]
  },  
  {
    name: 'Database',
    icon: 'Database',
    skills: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'Firebase', icon: '🔥' },
    ]
  },
  {
    name: 'DevOps & Tools',
    icon: 'Settings',
    skills: [
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '☸️' },
      { name: 'Kafka', icon: '📊' },
      { name: 'CI/CD', icon: '🔄' },
      { name: 'AWS', icon: '☁️' },
      { name: 'Google Cloud', icon: '☁️' },
      { name: 'Redis', icon: '🔻' },
      { name: 'Linux', icon: '🐧' },
    ]
  },
];

// Experience data
export const experienceData = [  
  {
    title: "Frontend Developer",
    company: "Tokopedia",
    period: "2023 - 2024",
    location: "Jakarta, Indonesia",
    descriptions: [
      "Develop the Seller Center platform using React and TypeScript, empowering sellers with tools to manage their stores.",
      "Integrated GraphQL for efficient data handling, reducing load times and improving user experience.",
      "Employed WebSockets for real-time order notifications, keeping sellers informed instantly.",
      "Focused on performance optimization and responsive design, resulting in a 20% increase in seller satisfaction scores."
    ]
  },
  {
    title: "Frontend Developer",
    company: "Grab",
    period: "2020 - 2023",
    location: "Singapore",
    descriptions: [
      "Built the dashboard with React and TypeScript, providing merchants with real-time business insights.",
      "Used Redux for state management, ensuring consistent data flow across components.",
      "Integrated RESTful APIs for data retrieval, optimizing the dashboard's responsiveness.",
      "Prioritized accessibility and responsive design, making the platform user-friendly across devices."
    ]
  },
  {
    title: "Frontend Developer",
    company: "Rakuten",
    period: "2017 - 2020",
    location: "Tokyo, Japan",
    descriptions: [
      "Developed the mobile app using React Native and TypeScript, ensuring a smooth experience for iOS and Android users.",
      "Integrated GraphQL APIs for efficient data fetching, enhancing app performance.",
      "Implemented real-time booking features with WebSockets, allowing instant updates on room availability.",
      "Focused on responsive design and performance optimization, leading to increased user engagement."
    ]
  }
];

// Contact section data
export const contactInfo = [
  {
    icon: "Mail",
    title: "Email",
    value: "venuswillie1216@gmail.com"
  },
  {
    icon: "MapPin",
    title: "Location",
    value: "Kyiv City, Ukraine"
  },
  {
    icon: "Calendar",
    title: "Availability",
    value: "Ready for new projects"
  }
];

// Social links
export const socialLinks = [
  {
    name: "LinkedIn",
    icon: "Linkedin",
    url: "#"
  },
  {
    name: "GitHub",
    icon: "Github",
    url: "#"
  },
  {
    name: "Twitter",
    icon: "Twitter",
    url: "#"
  },
  {
    name: "Blog",
    icon: "BookOpen",
    url: "#"
  }
];
