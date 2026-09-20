export type Project = {
  title: string
  href: string
  description: string
  image: string
  darkModeImage: string
  githubLink: string
  liveLink: string
  skills: string[]
  descriptionList: string[]
}

export const PROJECTS: Project[] = [
  {
    title: "SarkarBrothers",
    href: "/projects/sarkarbrothers",
    description: "Toys & gifts buying platform with an intelligent AI assistant powered by Google Gemini API.",
    image: "/assets/portfolio-light.png",
    darkModeImage: "/assets/portfolio-dark.png",
    githubLink: "https://github.com/soumyadeepsarkar-2004/SarkarBrothers",
    liveLink: "https://sarkarbrothers.vercel.app",
    skills: ["React", "Node.js", "Firebase", "Gemini API", "TypeScript"],
    descriptionList: [
      "AI-powered conversational shopping assistant using Google Gemini API",
      "Secure Firebase Auth with real-time Firestore database sync",
      "Full-stack toys & gifts catalog with instant search & cart management",
      "Optimized modern responsive UI built with React & Tailwind CSS",
    ],
  },
  {
    title: "MessWala",
    href: "/projects/messwala",
    description: "Smart mess and meal management platform designed for student hostels and paying guests.",
    image: "/assets/portfolio-light.png",
    darkModeImage: "/assets/portfolio-dark.png",
    githubLink: "https://github.com/soumyadeepsarkar-2004/MessWala",
    liveLink: "https://mess-walah.vercel.app",
    skills: ["Next.js", "React", "Node.js", "Tailwind CSS", "MongoDB"],
    descriptionList: [
      "Automated meal tracking, monthly attendance, and billing computation",
      "Role-based authentication for mess managers and boarders",
      "Real-time menu updates, expense tracking, and transparent balances",
      "Mobile-friendly dashboard ensuring fast, accessible daily operations",
    ],
  },
  {
    title: "Bushido: Way of the Wanderer",
    href: "/projects/bushido",
    description: "3D Action RPG built with Three.js and Vite — an immersive samurai game in the browser.",
    image: "/assets/portfolio-light.png",
    darkModeImage: "/assets/portfolio-dark.png",
    githubLink: "https://github.com/soumyadeepsarkar-2004/bushido-way-of-the-wanderer",
    liveLink: "https://bushido-way-of-the-wanderer.vercel.app",
    skills: ["Three.js", "Vite", "JavaScript", "3D WebGL", "Game Dev"],
    descriptionList: [
      "Real-time 3D samurai action RPG rendered directly in the browser via WebGL",
      "Custom combat mechanics, fluid animations, and enemy collision detection",
      "Optimized asset loading and lighting pipeline powered by Three.js & Vite",
      "Atmospheric feudal Japanese sound design and visual environments",
    ],
  },
  {
    title: "EchoDAO",
    href: "/projects/echodao",
    description: "Decentralized governance platform on Celo with AI content verification and IPFS storage.",
    image: "/assets/portfolio-light.png",
    darkModeImage: "/assets/portfolio-dark.png",
    githubLink: "https://github.com/soumyadeepsarkar-2004/Echo_DAO",
    liveLink: "https://celo-demo-ten.vercel.app",
    skills: ["Solidity", "Celo", "IPFS", "React", "Web3"],
    descriptionList: [
      "On-chain community governance with transparent voting and treasury allocation",
      "AI-driven proposal validation layer to detect spam and malicious submissions",
      "Decentralized immutable metadata storage backed by IPFS & Pinata",
      "Ultra-low transaction fees and carbon-negative footprint via Celo network",
    ],
  },
  {
    title: "Inbox3 Message",
    href: "/projects/inbox3-message",
    description: "Decentralized messaging protocol built on Aptos blockchain featuring end-to-end encryption.",
    image: "/assets/portfolio-light.png",
    darkModeImage: "/assets/portfolio-dark.png",
    githubLink: "https://github.com/soumyadeepsarkar-2004/inbox3-message",
    liveLink: "https://inbox3-message.vercel.app",
    skills: ["Aptos", "Move", "React", "E2E Encryption", "Web3"],
    descriptionList: [
      "Wallet-to-wallet secure peer-to-peer messaging on the Aptos network",
      "End-to-end cryptographic message encryption guaranteeing total user privacy",
      "Seamless Petra wallet integration with instant transaction confirmations",
      "Decentralized state verification eliminating centralized server dependency",
    ],
  },
  {
    title: "Knight Pride Portal",
    href: "/projects/knight-pride-portal",
    description: "Kolkata Knight Riders fan hub featuring live squad info, match schedules, stats, and fan zone.",
    image: "/assets/portfolio-light.png",
    darkModeImage: "/assets/portfolio-dark.png",
    githubLink: "https://github.com/soumyadeepsarkar-2004/knight-pride-portal",
    liveLink: "https://kkr-fp.lovable.app",
    skills: ["TypeScript", "React", "Tailwind CSS", "Vite"],
    descriptionList: [
      "Dynamic fan hub covering IPL squad details, player stats, and historical milestones",
      "Match timetable, countdown timers, and interactive match day gallery",
      "Interactive fan engagement poll and social community hub",
      "Purple-and-gold themed UI optimized with high-performance animations",
    ],
  },
  {
    title: "TrackGuard AI",
    href: "/projects/trackguard-ai",
    description: "Computer vision and deep learning collision prevention model for railway tracks and locomotives.",
    image: "/assets/portfolio-light.png",
    darkModeImage: "/assets/portfolio-dark.png",
    githubLink: "https://github.com/soumyadeepsarkar-2004/TrackGuard_AI",
    liveLink: "https://track-guard-ai.vercel.app",
    skills: ["Python", "Computer Vision", "Deep Learning", "React", "FastAPI"],
    descriptionList: [
      "Real-time object detection identifying obstacles, animals, and hazards on rail tracks",
      "Predictive collision prevention alerting system for train drivers and signal towers",
      "Trained on custom locomotive video footage for robust weather resilience",
      "Interactive monitoring dashboard for operations oversight and incident logs",
    ],
  },
  {
    title: "Heartbeats Arcade",
    href: "/projects/heartbeats-arcade",
    description: "Shared synchronized musical listening room and multiplayer minigame lounge for two.",
    image: "/assets/portfolio-light.png",
    darkModeImage: "/assets/portfolio-dark.png",
    githubLink: "https://github.com/soumyadeepsarkar-2004/heartbeats-arcade",
    liveLink: "https://twoheartsbeat.vercel.app",
    skills: ["React", "WebSockets", "Audio API", "Tailwind CSS"],
    descriptionList: [
      "Low-latency real-time synchronized audio playback between two remote listeners",
      "Interactive arcade mini-games playable in sync while streaming music",
      "Socket-based state management ensuring zero-drift playback synchronization",
      "Cozy retro-arcade aesthetics with customizable soundscapes and themes",
    ],
  },
]
