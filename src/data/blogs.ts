export type Blog = {
  title: string
  url: string
  image: string
  date: Date
  tags: string[]
}

export const BLOGS: Blog[] = [
  {
    title: "Building a Decentralized Chat Application using React, Solidity, and IPFS",
    url: "https://dev.to/soumyadeepsarkar/building-a-decentralized-chat-dapp",
    image: "/assets/portfolio-light.png",
    date: new Date("2024-10-15"),
    tags: ["web3", "react", "solidity", "ipfs"],
  },
  {
    title: "Why Next.js is the perfect framework for Full Stack Web3 Development",
    url: "https://dev.to/soumyadeepsarkar/nextjs-for-web3",
    image: "/assets/portfolio-light.png",
    date: new Date("2024-08-20"),
    tags: ["nextjs", "web3", "full-stack"],
  },
  {
    title: "My experience building an AI-powered E-commerce Platform",
    url: "https://dev.to/soumyadeepsarkar/ai-ecommerce-platform",
    image: "/assets/portfolio-light.png",
    date: new Date("2024-06-10"),
    tags: ["ai", "ecommerce", "nextjs", "mongodb"],
  },
]
