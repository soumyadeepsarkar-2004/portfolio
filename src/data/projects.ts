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
    description: "Toys & gifts buying platform with AI assistant powered by Gemini API.",
    image: "/assets/portfolio-light.png",
    darkModeImage: "/assets/portfolio-dark.png",
    githubLink: "https://github.com/soumyadeepsarkar-2004/SarkarBrothers",
    liveLink: "https://sarkarbrothers.vercel.app",
    skills: ["React", "Node.js", "Firebase", "Gemini API", "TypeScript"],
    descriptionList: [
      "AI-powered shopping assistant using Gemini API",
      "Firebase Auth & Realtime Database integration",
      "Full-stack toys & gifts e-commerce platform",
      "Responsive UI with modern design patterns",
    ],
  },
  {
    title: "Bushido: Way of the Wanderer",
    href: "/projects/bushido",
    description: "3D Action RPG built with Three.js and Vite — immersive browser-based game.",
    image: "/assets/portfolio-light.png",
    darkModeImage: "/assets/portfolio-dark.png",
    githubLink: "https://github.com/soumyadeepsarkar-2004/bushido-way-of-the-wanderer",
    liveLink: "https://bushido-way-of-the-wanderer.vercel.app",
    skills: ["Three.js", "Vite", "JavaScript", "3D", "Game Dev"],
    descriptionList: [
      "Real-time 3D action RPG in the browser",
      "Built with Three.js and Vite for performance",
      "Immersive samurai-themed game world",
      "Smooth animations and game mechanics",
    ],
  },
  {
    title: "Knight Pride Portal",
    href: "/projects/knight-pride-portal",
    description: "Kolkata Knight Riders fan hub — squad, match schedules, stats, news & gallery.",
    image: "/assets/portfolio-light.png",
    darkModeImage: "/assets/portfolio-dark.png",
    githubLink: "https://github.com/soumyadeepsarkar-2004/knight-pride-portal",
    liveLink: "https://kkr-fp.lovable.app",
    skills: ["TypeScript", "React", "Tailwind CSS", "Vite"],
    descriptionList: [
      "KKR fan hub with squad, stats, and news",
      "Responsive design for all screen sizes",
      "Match schedule and gallery sections",
      "Fan zone with interactive features",
    ],
  },
  {
    title: "Smart Shoe App",
    href: "/projects/smart-shoe-app",
    description: "Smart shoe shopping application with modern UI and product management.",
    image: "/assets/portfolio-light.png",
    darkModeImage: "/assets/portfolio-dark.png",
    githubLink: "https://github.com/soumyadeepsarkar-2004/smart-shoe-app",
    liveLink: "https://github.com/soumyadeepsarkar-2004/smart-shoe-app",
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    descriptionList: [
      "Smart shoe shopping platform",
      "Modern product browsing and management",
      "TypeScript for type-safe development",
      "Clean and responsive UI",
    ],
  },
  {
    title: "EchoDAO (Celo)",
    href: "/projects/echodao",
    description: "Blockchain-based decentralized governance platform on Celo with AI content verification and IPFS storage.",
    image: "/assets/portfolio-light.png",
    darkModeImage: "/assets/portfolio-dark.png",
    githubLink: "https://github.com/soumyadeepsarkar-2004/celo-demo",
    liveLink: "https://celo-demo-ten.vercel.app",
    skills: ["Solidity", "Celo", "IPFS", "React", "Web3"],
    descriptionList: [
      "Decentralized governance with on-chain voting",
      "AI-powered content verification layer",
      "IPFS storage for decentralized data",
      "Built on Celo blockchain for low-gas fees",
    ],
  },
  {
    title: "Bus Finder",
    href: "/projects/bus-finder",
    description: "Transit platform for finding bus routes and real-time schedules.",
    image: "/assets/portfolio-light.png",
    darkModeImage: "/assets/portfolio-dark.png",
    githubLink: "https://github.com/soumyadeepsarkar-2004/bus_finder",
    liveLink: "https://github.com/soumyadeepsarkar-2004/bus_finder",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    descriptionList: [
      "Real-time bus route discovery platform",
      "Interactive route maps and schedules",
      "Next.js for fast server-rendered pages",
      "Responsive mobile-first design",
    ],
  },
]
