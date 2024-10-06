export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'INNOVEST - Full Stack AI Platform',
    desc: 'Developed "Innovest", a platform bridging gaps in the startup ecosystem, providing a one- stop solution for networking, funding, and business knowledge.',
    subdesc:
      ' Features include Virtual Shark Tank for Real - time pitch competitions with investor feedback, Integrated Gen - AI chatbots for evaluating startup ideas and answer business queries, platform for presenting ideas to potential investors .etc',
    href: 'https://github.com/mridulsaggi/Innovest',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'MongoDb',
        path: 'data:image/jpeg;base64,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',
      },
    ],
  },
  {
    title: 'LiveDoc - Real-Time Google Docs Clone',
    desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    subdesc:
      'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Node Js',
        path: '/assets/nodejslogo.png',
      },
      {
        id: 4,
        name: 'MongoDb',
        path: '/assets/mongodb.png',
      },
    ],
  },
  {
    title: 'VideoStream',
    desc: 'Developed a fully responsive Video streaming platform using React.js, demonstrating proficiency in modern frontend development techniques.',
    subdesc:
      'Integrated YouTube API to render channels, videos, and dynamic content seamlessly. Implemented personalized video recommendations based on user interests, enhancing user engagement and retention.',
    href: 'https://youtubeclone-ten-teal.vercel.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/jslogo.png',
      },
      {
        id: 4,
        name: 'Gsap',
        path: '/assets/gsaplogo.jpeg',
      },
    ],
  },
  {
    title: 'AiShala ',
    desc: 'Utilized modern technologies to develop a full-stack, robust, and user-friendly educational platform with secure teacher and student authentication',
    subdesc:
      'Implemented features enabling teachers to upload videos and materials for student access, enhancing the learning experience .Enabled interactive discussions among students through commenting and topic discussions on the website, fostering engagement and collaboration',
    href: 'https://ai-shala.com/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'MongoDb',
        path: '/assets/mongodb.png',
      },
      {
        id: 4,
        name: 'Node Js',
        path: '/assets/nodejslogo.png',
      },
    ],
  }
  // {
  //   title: 'Imaginify - AI Photo Manipulation App',
  //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
  //   subdesc:
  //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
  //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
  //   texture: '/textures/project/project5.mp4',
  //   logo: '/assets/project-logo5.png',
  //   logoStyle: {
  //     backgroundColor: '#1C1A43',
  //     border: '0.2px solid #252262',
  //     boxShadow: '0px 0px 60px 0px #635BFF4D',
  //   },
  //   spotlight: '/assets/spotlight5.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Elfi-Homes',
    pos: 'Full Stack Web Developer',
    duration: 'July 2024 - September 2024',
    title: "Worked as a full stack web developer ,leading a team of three people to design and develop full stack CRM(Customer retention model) web platform. Developer features such as secure authentication , leads dashboard , automatic mails scheduling , analysis of inbox mails for auto replys.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'AiShala',
    pos: 'Full Stack Web Developer',
    duration: 'June 2023 – Septemper 2023',
    title: "FUtilized modern technologies to develop a full-stack, robust, and user-friendly educational platform with secure teacher and student authentication Implemented features enabling teachers to upload videos and materials for student access, enhancing the learning experience",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Clumoss',
    pos: 'Frontend Web Developer Intern',
    duration: 'Dec 2023 – March 2024',
    title: "Collaborated in frontend development projects at Clumoss, focusing on improving user interactions and interface design.Implemented cutting-edge frontend technologies to ensure website responsiveness and deliver seamless browsing experiences for users.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];