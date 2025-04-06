
// Project data
export const projects = [
  {
    id: 1,
    title: 'MedHealth Dashboard',
    description: 'A healthcare management dashboard displaying appointments, patient records, and medical metrics with a clean, data-rich interface.',
    image: '/img/Project1.jpg',
    url: 'https://www.medhealth.net.br/',
    "technologies": [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js (or D3.js for metrics)",
      "Date-fns (for calendar)",
      "CSS Grid/Flexbox",
      "JSON (for mock data)",
      "Figma (for design mockups)"
    ],
    "features": [
      "Built responsive card components for metrics (appointments, surgeries) with dynamic percentage indicators",
      "Implemented an interactive calendar grid with CSS Grid for date management",
      "Designed a patient records section with medical category tagging",
      "Created a scrollable today's appointments list with medical priority indicators (bold items)",
      "Developed percentage change indicators with conditional styling (colors for positive/negative trends)"
    ]
  },
  {
    "id": 2,
    "title": "Rakuten Website",
    "description": "A global website showcasing Rakuten's services, innovations, and regional operations with multi-region support.",
    "image": "/img/rakuten.png",
    "url": "https://global.rakuten.com/corp/",
    "technologies": [
      "Next.js (or Gatsby for static content)",
      "React",
      "TypeScript",
      "Tailwind CSS/SASS",
      "i18n (for multilingual support)",
      "Headless CMS (Contentful/Sanity)",
      "GraphQL",
      "Google Maps API (for region display)",
      "Accessibility tools (axe-core)"
    ],
    "features": [
      "Developed responsive navigation with dropdown menus (visible in 'About Us' section hierarchy)",
      "Implemented geo-based content switching for region-specific services (AMERICAS/ASIA flags)",
      "Built CMS-powered pages for 'Media Room' and 'Sustainability' dynamic content",
      "Optimized performance for investor relations pages with critical CSS",
      "Created accessible mega-menus for deep corporate site navigation"
    ]
  },
  {
    "id": 3,
    "title": "Grab Website",
    "description": "A technology showcase platform for Grab's hyperlocal mapping solutions, featuring award-winning products, partner integrations, and real-time data capabilities.",
    "image": "/img/grabmaps.png",
    "url": "https://www.grab.com/sg/maps/",
    "technologies": [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion (for interactive maps)",
      "Mapbox GL JS/Leaflet",
      "Headless CMS (Contentful)",
      "Partner API integrations",
      "Vercel Analytics",
      "Geolocation APIs"
    ],
    "features": [
      "Developed interactive dropdown menus for solutions/industries navigation (visible in header)",
      "Implemented partner logo carousel with lazy loading (Microsoft, AWS, etc.)",
      "Built real-time data visualization components for hyperlocal map updates",
      "Created award highlight section with animated Red Dot Award badge",
      "Optimized for Southeast Asia region with localized content delivery"
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
