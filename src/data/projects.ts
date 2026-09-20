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
    title: "MessWala",
    href: "/projects/messwala",
    description: "MERN Mess Management system for college canteens.",
    image: "/assets/portfolio-light.png",
    darkModeImage: "/assets/portfolio-dark.png",
    githubLink: "https://github.com/soumyadeepsarkar-2004/MessWala",
    liveLink: "https://messwala.vercel.app",
    skills: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    descriptionList: [
      "MERN Mess Management system for college canteens.",
    ],
  },
  {
    title: "SarkarBrothers",
    href: "/projects/sarkarbrothers",
    description: "AI-powered E-commerce platform with intelligent product recommendations.",
    image: "/assets/portfolio-light.png",
    darkModeImage: "/assets/portfolio-dark.png",
    githubLink: "https://github.com/soumyadeepsarkar-2004/SarkarBrothers",
    liveLink: "https://sarkarbrothers.vercel.app",
    skills: ["Next.js", "React", "AI/ML", "Node.js", "MongoDB"],
    descriptionList: [
      "AI-powered E-commerce platform with intelligent product recommendations.",
    ],
  },
  {
    title: "blockchain-tutor",
    href: "/projects/blockchain-tutor",
    description: "Course booking platform with blockchain-based certification.",
    image: "/assets/portfolio-light.png",
    darkModeImage: "/assets/portfolio-dark.png",
    githubLink: "https://github.com/soumyadeepsarkar-2004/blockchain-tutor",
    liveLink: "https://blockchain-tutor.vercel.app",
    skills: ["Solidity", "Next.js", "Ethereum", "React", "Web3.js"],
    descriptionList: [
      "Course booking platform with blockchain-based certification.",
    ],
  },
  {
    title: "INBOX3",
    href: "/projects/inbox3",
    description: "Web3 Chat dApp with decentralized messaging.",
    image: "/assets/portfolio-light.png",
    darkModeImage: "/assets/portfolio-dark.png",
    githubLink: "https://github.com/soumyadeepsarkar-2004/inbox3",
    liveLink: "https://inbox3.vercel.app",
    skills: ["React", "Solidity", "Web3", "Ethers.js", "IPFS"],
    descriptionList: [
      "Web3 Chat dApp with decentralized messaging.",
    ],
  },
  {
    title: "BUS_FINDER",
    href: "/projects/bus-finder",
    description: "Transit Platform for finding bus routes and schedules.",
    image: "/assets/portfolio-light.png",
    darkModeImage: "/assets/portfolio-dark.png",
    githubLink: "https://github.com/soumyadeepsarkar-2004/bus_finder",
    liveLink: "https://bus-finder.vercel.app",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    descriptionList: [
      "Transit Platform for finding bus routes and schedules.",
    ],
  },
  {
    title: "EDU_MANAGE",
    href: "/projects/edu-manage",
    description: "Full-Stack Education Management System.",
    image: "/assets/portfolio-light.png",
    darkModeImage: "/assets/portfolio-dark.png",
    githubLink: "https://github.com/soumyadeepsarkar-2004/EDU_MANAGE",
    liveLink: "https://edu-manage.vercel.app",
    skills: ["Next.js", "Node.js", "MongoDB", "Express", "React"],
    descriptionList: [
      "Full-Stack Education Management System.",
    ],
  },
]
